import request from '@/utils/request'

// 查询站点信息列表
export function listStationInfo(query) {
  return request({
    url: '/op/stationInfo/list/page',
    method: 'get',
    params: query,
  })
}

// 查询站点信息详细
export function getStationInfo(stationCode) {
  return request({
    url: `/system/stationInfo/${stationCode}`,
    method: 'get',
  })
}

// 新增站点信息
export function addStationInfo(data) {
  return request({
    url: '/system/stationInfo',
    method: 'post',
    data,
  })
}

// 修改站点信息
export function updateStationInfo(data) {
  return request({
    url: '/system/stationInfo',
    method: 'put',
    data,
  })
}

// 删除站点信息
export function delStationInfo(stationCode) {
  return request({
    url: `/system/stationInfo/${stationCode}`,
    method: 'delete',
  })
}
