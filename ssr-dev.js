const Koa = require('koa')

const viteServerMiddleware= require('./middlewares/viteServerMiddleware')
const templateMiddleware = require('./middlewares/templateMiddleware')

const app = new Koa()

app.use(viteServerMiddleware)
app.use(templateMiddleware)
app.listen('3001', function () {
    console.log('localhost:3001')
})
