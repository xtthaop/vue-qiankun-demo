import request from '@/utils/request.js'

export function getAllAppInfo() {
  return request({
    url: '/sysconfig/all-app-info.json',
    method: 'get',
  })
}

export function getMicroappConfig() {
  return request({
    url: '/sysconfig/microapp-config.json',
    method: 'get',
  })
}
