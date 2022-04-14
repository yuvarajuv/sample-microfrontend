const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = webpack.container

const mode = process.env.NODE_ENV ?? 'development'

const isEnvDevelopment = mode === 'development'
const isEnvProduction = mode === 'production'

// Include env and feature flag
const featureFlags = require('./featureFlags')
const deps = require('./package.json').dependencies

module.exports = (env) => {
  require('dotenv').config({ path: env.CONFIG_FILE })

  const webpackConfig = {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, '../../', process.env.BUILD_DIR ?? 'build'),
      filename: isEnvProduction
        ? 'static/js/[name].[chunkhash].js'
        : isEnvDevelopment && 'static/js/[name].js',
      publicPath: process.env.PUBLIC_PATH_MAIN_APP ?? '/',
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
        }),
      ],
      runtimeChunk: false,
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: false,
      port: 3005,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        node: 'current',
                      },
                    },
                  ],
                  '@babel/preset-react',
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'file-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),

      new Dotenv({
        path: `../env/${mode}.env`,
        silent: true,
        systemvars: true,
      }),

      new webpack.DefinePlugin({
        featureFlags: {
          ...featureFlags,
        },
      }),

      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),

      new CopyPlugin({
        patterns: [
          { from: 'public/offline.html', to: '' },
          { from: 'public/service-worker.js', to: '' },
          { from: 'public/favicon.ico', to: '' },
        ],
        options: {
          concurrency: 100,
        },
      }),

      new ModuleFederationPlugin({
        name: 'main',
        filename: 'remoteEntry.js',
        remotes: {
          components: 'shared@' + process.env.MODULE_FEDERATION_SHARED_REMOTE,
        },
        exposes: {
          './App': './src/App.js',
          './Authenticate': './src/services/Authenticate',
        },
        shared: {
          ...deps,
          react: {
            requiredVersion: deps['react'],
            singleton: true,
          },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true,
          },
          'react-router-dom': {
            requiredVersion: deps['react-router-dom'],
            singleton: true,
          },
          'styled-system': {
            requiredVersion: deps['styled-system'],
            singleton: true,
          },
          '@styled-system/prop-types': {
            requiredVersion: deps['@styled-system/prop-types'],
            singleton: true,
          },
          'styled-components': {
            requiredVersion: deps['styled-components'],
            singleton: true,
          },
          'prop-types': {
            requiredVersion: deps['prop-types'],
            singleton: true,
          },
        },
      }),
    ],
    resolve: {
      extensions: ['', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }

  if (isEnvProduction) {
    webpackConfig.plugins.push(
      new CleanWebpackPlugin({
        verbose: false,
        dry: false,
        cleanOnceBeforeBuildPatterns: ['static', '*.*'],
      }),
    )
  }

  return webpackConfig
}
