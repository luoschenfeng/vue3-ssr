import httpProxy from 'http-proxy'
import setting from '@/setting'
export default httpProxy.createProxyServer({
  target: setting.API_HOST,
})