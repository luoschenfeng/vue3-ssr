import  {
  viteDevServer,
} from '@/common/vite'
import koaConnect from 'koa-connect'
import * as Koa from 'koa'

const viteServerMiddleware : Koa.Middleware = async function (ctx, next) {
  const viteServer = await viteDevServer

  await koaConnect(viteServer.middlewares)(ctx, next)
}

export default  viteServerMiddleware
