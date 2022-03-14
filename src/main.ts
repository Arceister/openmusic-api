import Hapi from '@hapi/hapi'

const init = async (): Promise<void> => {
  const server: Hapi.Server = Hapi.server({
    port: 5000,
    host: 'localhost',
  })

  await server.start()
  console.log('Server running on ' + server.info.uri)
}

init()