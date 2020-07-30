export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'post'
  | 'POST'
  | 'patch'
  | 'PATCH'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
}
