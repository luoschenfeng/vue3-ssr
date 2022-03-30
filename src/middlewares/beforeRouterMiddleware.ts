import * as Koa from 'koa'
// import {
//   SRequest,
// } from '@/utils/request'
// import api from '@/common/api'
const beforeRouterMiddleware : Koa.Middleware = async function (ctx, next) {

  // let {
  //   serverRouter,
  // } = await entryServerLoad()

  // serverRouter= Object.create(serverRouter)

  // serverRouter.beforeEach(async (from, to, done) => {
  //   try {
  //     const routes = await SRequest({
  //       url: api.routes,
  //     })

  //     console.log(routes) }
  //   catch (err) {
  //     console.log(err)
  //   }
  //   done()
  // })

  await next()
}

export default  beforeRouterMiddleware
