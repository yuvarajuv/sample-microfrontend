const fastify = require('fastify')()

const path = require('path')

require('dotenv').config({ path: process.env.CONFIG_FILE })

fastify.register(require('fastify-http-proxy'), {
  upstream: process.env.GRAPHQL_URI,
  prefix: '/graphql',
  http2: false,
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, process.env.BUILD_DIR),
  prefix: '/',
})

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html')
})

fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    console.error(err)
  }
  console.log(`server listening on ${address}`)
})
