import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue/table/list',
    method: 'get',
    params
  })
}
