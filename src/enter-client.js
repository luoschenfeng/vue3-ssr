import { createApp } from './sub'
import { createRouter } from './router'
const app = createApp()

const router = createRouter('client')

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
}) 

