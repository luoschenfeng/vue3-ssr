import 'module-alias/register'
import Koa from 'koa'
// import beforeRouterMiddleware from './middlewares/beforeRouterMiddleware'
import viteServerMiddleware from './middlewares/viteServerMiddleware'
import templateMiddleware from './middlewares/templateMiddleware'
import bodyparser from 'koa-bodyparser'

const app = new Koa()

app.use(bodyparser())
app.use(viteServerMiddleware)
app.use(templateMiddleware)
// app.use(beforeRouterMiddleware)

app.listen('3002', function () {
  console.log('localhost:3002')
})
