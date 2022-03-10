module.exports = templateMiddleware
const fs = require('fs/promises')
const path = require('path')

async function templateMiddleware (ctx, next) {
  const { viteServer } = ctx 
  let template = await fs.readFile(path.resolve(__dirname, '../index.html'), {
      encoding: 'utf8'
  })
  template = await viteServer.transformIndexHtml(ctx.url, template)

  const { render } = await viteServer.ssrLoadModule('/src/enter-server.js')
  const appHtml = await render(ctx)

  const html = template.replace(`<!--ssr-outlet-->`, appHtml)
  ctx.body = html
  await next()
}
