import  {
  viteDevServer, indexTemplte,
} from '@/common/vite'
import * as  Koa from 'koa'


const  templateMiddleware: Koa.Middleware = async function (ctx, next) {
  const viteServer = await viteDevServer

  let template = await indexTemplte


  template = await viteServer.transformIndexHtml(ctx.url, template)

  const {
    render,
  } = await viteServer.ssrLoadModule('@/common/entry/server.ts')


  await next()

  const appHtml = await render(ctx)

  const html = template.replace(`<!--ssr-outlet-->`, appHtml)

  ctx.body = html
}

export default templateMiddleware
