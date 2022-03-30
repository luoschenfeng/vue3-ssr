import {
  createRouter as createVueRouter, createWebHistory, createMemoryHistory, Router,
} from 'vue-router'
// import {
//   viteDevServer,
// } from '@/common/vite'
import routes from '@/router/routes'

export default function (type: 'client' | 'server'): Router {
  // const routes = await importRoutes(type)

  return createVueRouter({
    history: (type === 'client') ? createWebHistory() : createMemoryHistory(),
    routes,
  })
}

// async function importRoutes(type: 'client' | 'server'): Promise<RouteRecordRaw[]> {

//   let routesExport: promiseRoutesT

//   if (type === 'client') {
//     routesExport = await import('@/router/routes')
//   } else {
//     const viteServer = await viteDevServer

//     routesExport = await viteServer.ssrLoadModule('@/router/routes') as promiseRoutesT
//   }


//   return routesExport.default
// }

// type promiseRoutesT = {
//   default: RouteRecordRaw[]
// }
