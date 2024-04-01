// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Echo, EchoData, EchoPatch, EchoQuery, EchoService } from './echo.class'

export type { Echo, EchoData, EchoPatch, EchoQuery }

export type EchoClientService = Pick<EchoService<Params<EchoQuery>>, (typeof echoMethods)[number]>

export const echoPath = '/echo'

export const echoMethods = [ 'create'] as const

export const echoClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(echoPath, connection.service(echoPath), {
    methods: echoMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [echoPath]: EchoClientService
  }
}
