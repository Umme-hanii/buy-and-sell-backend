import Hapi, { server } from '@hapi/hapi'
import routes from './src/routes/index.js'
import db from './src/database.js'

let server
const start = async() => {
  server = Hapi.server({
    port: 8005,
    host: 'localhost'
  })

  routes.forEach(route => server.route(route))

  db.connect()
  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

process.on('SIGINT', async () => {
  console.log('Stopping Server....')

  await server.stop({ timeout: 1000})

  db.end()
  console.log('Server Stopped')
  pricess.exit(0)
})

start()