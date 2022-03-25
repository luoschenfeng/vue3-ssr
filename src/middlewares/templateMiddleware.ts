
import  fs from 'fs/promises'
import path from 'path'
import * as  Koa from 'koa'


const  templateMiddleware: Koa.Middleware = async function (ctx, next) {
  const viteServer =  ctx.ViteDevServer
  
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