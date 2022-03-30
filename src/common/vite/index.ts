import {
  createServer as createViteServer,
}  from 'vite'
import {
  readFile,
} from 'fs/promises'

export  const viteDevServer = createViteServer({
  root: process.cwd(),
  server: {
    middlewareMode: 'ssr',
  },
})

export const indexTemplte = readFile('public/index.html', {
  encoding: 'utf8',
})
