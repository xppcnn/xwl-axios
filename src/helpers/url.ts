import { isDate, isPlainObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }
  const parts: string[] = []
  Object.entries(params).forEach(([key, value]) => {
    // value === null  || value === undefined
    if (value == null) {
      return
    }
    let values = []
    if (Array.isArray(value)) {
      values = value
      key = key + '[]'
    } else {
      values = [value]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    // 去除 哈希
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    //  判断url中是否含有 ？
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
