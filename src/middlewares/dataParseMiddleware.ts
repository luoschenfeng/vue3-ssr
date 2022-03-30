import * as Koa from 'koa'
import setting from '@/setting'
import proxy from '@/common/proxy'
const dataParseMiddleware : Koa.Middleware = async function (ctx, next) {
  if (ctx.request.accepts([
    'htlm',
    'json', 
  ]) === 'json') {
    proxy.web(ctx.req, ctx.res, {
      target: setting.API_HOST,
    })
  } else {
    await next()
  }
}
  
export default  dataParseMiddleware