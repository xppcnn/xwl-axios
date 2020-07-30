import { AxiosRequestConfig } from './types'
import { head } from 'shelljs'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(key => {
    // 如果没有请求体，content-type没有意义
    if (data === null && key.toLowerCase() === 'content-type') {
      delete headers[key]
    } else {
      request.setRequestHeader(key, headers[key])
    }
  })
  request.send(data)
}

export default xhr
