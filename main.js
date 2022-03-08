const { createServer: createViteServer } = require('vite')

const Koa = require('koa')

const routerToView = require('./middlewares/routerToView')

const app = new Koa()


app.use(async (ctx, next) => {
  const vite = await createViteServer({
    server: {
      middlewareMode: 'ssr'
    }
  })
  await vite.middlewares(ctx.req, ctx.res)
  await next()
})

app.use(routerToView)

app.listen('3000')
