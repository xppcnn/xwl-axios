import axios from '../../src/index'

axios({
  method: 'get',
  url: '/base/get',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: {
        a: 'xxx'
      }
    }
  }
})

const date = new Date()
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null,
    arr: undefined
  }
})

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})