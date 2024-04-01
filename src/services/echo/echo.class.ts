// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'

type Echo = any
type EchoData = any
type EchoPatch = any
type EchoQuery = any

export type { Echo, EchoData, EchoPatch, EchoQuery }

export interface EchoServiceOptions {
  app: Application
}

export interface EchoParams extends Params<EchoQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class EchoService<ServiceParams extends EchoParams = EchoParams>
  implements ServiceInterface<Echo, EchoData, ServiceParams, EchoPatch>
{
  constructor(public options: EchoServiceOptions) {}


  async create(data: EchoData, params?: ServiceParams): Promise<Echo>
  async create(data: EchoData[], params?: ServiceParams): Promise<Echo[]>
  async create(data: EchoData | EchoData[], params?: ServiceParams): Promise<Echo | Echo[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      ...data
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
