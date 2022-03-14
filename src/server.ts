import Hapi, { Request, ResponseToolkit } from '@hapi/hapi'

export const init = async (): Promise<void> => {
  const server: Hapi.Server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ["*"]
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request: Request, h: ResponseToolkit) => {
      return {"message": "api hit!"}
    }
  })

  await server.start()
  console.log('Server running on ' + server.info.uri)
}