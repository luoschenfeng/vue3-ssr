import { renderToString } from 'vue/server-renderer'
import { createApp } from './sub'
import { createRouter } from './router'

const app = createApp()

const router = createRouter('server')

app.use(router)


export async function render (ctx) {
    await router.push(ctx.path)
    await router.isReady()
    
    return renderToString(app)
}
