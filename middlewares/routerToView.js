module.exports = routerToView
const urls = require('../urls')
async function routerToView(ctx, next) {
  let path = ctx.request.path
  let metched = false
  for (let url of urls) {
    if(url[0] === path) {
      url[1](ctx)
      await next()
      metched = true
      break
    }
  }
  if (!metched) {
    ctx.res.statusCode = 404
    await next()
  }
}
