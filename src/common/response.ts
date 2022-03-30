import {
  HTTP_SUCCESS_STATUS, HTTP_FAIL_STATUS,
} from './const'
import * as types from '@/types'

const errorCodes: types.likeObject = {
  '405000': '方法未实现',
}


export function responseJsonList<Model>(listInfo: {
  total: number
  page: number
  list: Model[],
}): responseList<Model> {
  return {
    data: {
      total: listInfo.total,
      page: listInfo.page,
      data: {
        list: listInfo.list,
      },
    },
    status: HTTP_SUCCESS_STATUS,
  }
}

export function responseJsonDetail<Model>(detailInfo: {
  data: Model,
}): responseDetali<Model> {
  return  {
    data: {
      data: detailInfo.data,
    },
    status: HTTP_SUCCESS_STATUS,
  }
}

export function responseJsonError(errorInfo: {
  code: string,
  message?: string
  title?: string
}): responseError {
  return {
    status: HTTP_FAIL_STATUS,
    data: {
      code: errorInfo.code,
      message: errorInfo.message || errorCodes[errorInfo.code] || '',
      title: errorInfo.title,
    },
  }
}


export interface responseList<Model> {
  data: {
    total: number
    page: number
    data: {
      list: Model[]
    }
  },
  status: typeof HTTP_SUCCESS_STATUS
}

export interface responseDetali<Model> {
  data: {
    data: Model
  },
  status: typeof HTTP_SUCCESS_STATUS
}

export interface responseError {
  data: {
    code: string,
    message: string,
    title?: string
  },
  status: typeof HTTP_FAIL_STATUS
}
