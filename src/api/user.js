import request from '@/utils/request.js'

export const login = data => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data
  })
}

export const getcode = data => {
  return request({
    url: `/app/v1_0/sms/codes/${data.mobile}`,
    method: 'get'
  })
}
