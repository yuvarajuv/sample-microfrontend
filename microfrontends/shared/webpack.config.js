const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { ModuleFederationPlugin } = webpack.container

const mode = process.env.NODE_ENV ?? 'development'

const isEnvDevelopment = mode === 'development'
const isEnvProduction = mode === 'production'

const deps = require('./package.json').dependencies

module.exports = (env) => {
  require('dotenv').config({ path: env.CONFIG_FILE })

  const webpackConfig = {
    mode,
    plugins: [new webpack.HotModuleReplacementPlugin()],
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(
        __dirname,
        '../../',
        process.env.BUILD_DIR ?? 'build',
        'shared',
      ),
      filename: isEnvProduction
        ? 'static/js/[name].[chunkhash].js'
        : isEnvDevelopment && 'static/js/[name].js',
      publicPath: process.env.PUBLIC_PATH_SHARED_APP ?? '/',
      clean: true,
    },
    devServer: {
      historyApiFallback: true,
      compress: true,
      hot: false,
      port: 3000,
    },
    optimization: {
      runtimeChunk: false,
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
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: {
                  filter: (url) => {
                    if (url.includes('data:image')) {
                      return false
                    }
                    return true
                  },
                },
              },
            },
          ],
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
        path: `../../env/${mode}.env`,
        silent: true,
        systemvars: true,
      }),

      new ModuleFederationPlugin({
        name: 'shared',
        filename: 'remoteEntry.js',
        remotes: {
          main: 'main@' + process.env.MODULE_FEDERATION_MAIN_REMOTE,
        },
        exposes: {
          './Fields': './src/components/Fields',
          './Ui': './src/components/ui',
          './ContentLoader': './src/components/ContentLoader',
          './utils/localization': './src/utils/localization/index.js',
          './utils': './src/utils/index.js',
          './Form': './src/components/Form',
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
          'styled-components': {
            requiredVersion: deps['styled-components'],
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
          'prop-types': {
            requiredVersion: deps['prop-types'],
            singleton: true,
          },
          'react-flow-renderer': {
            requiredVersion: deps['react-flow-renderer'],
            singleton: true,
          },
          recharts: {
            requiredVersion: deps['recharts'],
            singleton: true,
          },
          dataloader: {
            requiredVersion: deps['dataloader'],
            singleton: true,
          },
          setimmediate: {
            requiredVersion: deps['setimmediate'],
            singleton: true,
          },
          'react-query': {
            requiredVersion: deps['react-query'],
            singleton: true,
          },
          graphql: {
            requiredVersion: deps['graphql'],
            singleton: true,
          },
          'graphql-request': {
            requiredVersion: deps['graphql-request'],
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

  if (isEnvDevelopment) {
    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),
    )
  }

  if (isEnvProduction) {
    webpackConfig.plugins.push(
      new CleanWebpackPlugin({
        verbose: false,
        dry: false,
      }),
    )
  }

  return webpackConfig
}
