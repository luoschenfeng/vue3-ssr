import {
  renderToString, 
} from 'vue/server-renderer'
import {
  createApp, 
} from './common-entry'
import {
  serverRouter, 
} from './router'
import * as Koa from 'koa'

const app = createApp()

app.use(serverRouter)

export async function render(ctx: Koa.Context) {
  await serverRouter.push(ctx.path)
  await serverRouter.isReady()
    
  return renderToString(app)
}
