import setting from '@/setting'
import http from 'http'
import axios, {
  AxiosInstance,
} from 'axios'
import * as types from '@/types'
import {
  responseJsonError,
} from '@/common/response'

function instance(type: 'client' | 'server'):AxiosInstance {
  return axios.create({
    baseURL: `${type === 'client' ? setting.CLIENT_HOST : setting.SERVER_HOST}/api/`,
    timeout: 5000,
    httpAgent: type === 'client'
      ? null
      : new http.Agent({
        keepAlive: true,
      }),
    proxy: false,
  })
}


const  CInstance = instance('client')

const  SInstance = instance('server')

// 添加请求拦截器
CInstance.interceptors.request.use(function (config) {

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
CInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});


// 添加请求拦截器
SInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
SInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(responseJsonError({
    code: '500000',
    message: error.message,
  }));
});


export function CRequest(config: config) {

  if (config.method === 'get' || !config.method) {
    return CInstance({
      url: config.url,
      params: config.params || {},
    })
  } else {
    return CInstance({
      method: config.method,
      url: config.url,
      data: config.params || {},
    })
  }
}
export function SRequest(config: config) {
  if (config.method === 'get' || !config.method) {
    return SInstance({
      url: config.url,
      params: config.params || {},
    })
  } else {
    return SInstance({
      method: config.method,
      url: config.url,
      data: config.params || {},
    })
  }
}


interface config {
  params?: types.likeObject
  method?: 'get' | 'post' | 'put' | 'delete'
  url: string
}
