const { createServer: createViteServer } = require('vite')
const koaConnect = require('koa-connect')

module.exports = viteServerMiddleware

async function viteServerMiddleware (ctx, next) {
    const viteServer = await createViteServer({
      root: process.cwd(),
      server: {
        middlewareMode: 'ssr'
      }
    })
    ctx.viteServer = viteServer
    await koaConnect(viteServer.middlewares)(ctx, next)
}