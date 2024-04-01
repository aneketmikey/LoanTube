// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import type { Application } from '../../declarations'
import { EchoService, getOptions } from './echo.class'
import { echoPath, echoMethods } from './echo.shared'

export * from './echo.class'

// A configure function that registers the service and its hooks via `app.configure`
export const echo = (app: Application) => {
  // Register our service on the Feathers application
  app.use(echoPath, new EchoService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: echoMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(echoPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      create: []

    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [echoPath]: EchoService
  }
}
