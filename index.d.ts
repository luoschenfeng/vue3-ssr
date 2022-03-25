import {
  ViteDevServer, 
} from 'vite'
declare module 'koa' {
    interface DefaultContext  {
      ViteDevServer: ViteDevServer
    }
}