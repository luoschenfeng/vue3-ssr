
import  fs from 'fs/promises'
import path from 'path'
import * as  Koa from 'koa'


async function templateMiddleware(ctx: Koa.Context, next: Koa.Next) {
  const {
    viteServer, 
  } = ctx 
  
  let template = await fs.readFile(path.resolve(__dirname, '../index.html'), {
    encoding: 'utf8',
  })

  template = await viteServer.transformIndexHtml(ctx.url, template)

  const {
    render, 
  } = await viteServer.ssrLoadModule('/src/entry-server.ts')
  
  const appHtml = await render(ctx)
  
  const html = template.replace(`<!--ssr-outlet-->`, appHtml)
  
  ctx.body = html
  await next()
}

export default templateMiddleware