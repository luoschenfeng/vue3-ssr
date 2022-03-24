import {
  renderToString, 
} from 'vue/server-renderer'
import {
  createApp, 
} from './common-entry'
import {
  createRouter, 
} from './router'
import * as Koa from 'koa'

const app = createApp()

const router = createRouter('server')

app.use(router)


export async function render(ctx: Koa.Context) {
  await router.push(ctx.path)
  await router.isReady()
    
  return renderToString(app)
}
