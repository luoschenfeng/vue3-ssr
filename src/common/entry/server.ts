import {
  renderToString,
} from 'vue/server-renderer'
import {
  createApp,
} from './base'
import createRoute from '@/common/router'

import * as Koa from 'koa'

const app = createApp()

export const serverRouter = createRoute('server')

app.use(serverRouter)

export async function render(ctx: Koa.Context) {

  await serverRouter.push(ctx.path)
  await serverRouter.isReady()

  return renderToString(app)
}

