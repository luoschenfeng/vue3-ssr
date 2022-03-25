import { 
  createServer as createViteServer,
}  from 'vite'
import * as  Koa from 'koa'

import koaConnect from 'koa-connect'

const viteServerMiddleware : Koa.Middleware = async function (ctx: Koa.Context, next: Koa.Next) {
  const viteServer = await createViteServer({
    root: process.cwd(),
    server: {
      middlewareMode: 'ssr',
    },
  })
  
  ctx.viteServer = viteServer
  await koaConnect(viteServer.middlewares)(ctx, next)
}

export default  viteServerMiddleware