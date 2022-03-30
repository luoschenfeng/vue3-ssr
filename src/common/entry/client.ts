import {
  createApp,
} from './base'
import createRouter from '@/common/router'
const app = createApp()

const clientRouter =  createRouter('client')

app.use(clientRouter)
clientRouter.isReady().then(() => {
  app.mount('#app')
})
