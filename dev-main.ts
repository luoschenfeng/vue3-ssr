import Koa from 'koa'
import viteServerMiddleware from './middlewares/viteServerMiddleware'
import templateMiddleware from './middlewares/templateMiddleware'

const app = new Koa()

app.use(viteServerMiddleware)
app.use(templateMiddleware)

app.listen('3001', function () {
  console.log('localhost:3001')
})
