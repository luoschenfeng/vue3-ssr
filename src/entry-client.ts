import {
  createApp, 
} from './common-entry'
import {
  clientRouter, 
} from './router'
const app = createApp()

app.use(clientRouter)

clientRouter.isReady().then(() => {
  app.mount('#app')
}) 

