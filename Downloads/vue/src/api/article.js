import request from '@/utils/request'

export function fetchList(query) {
  const url = 'http://192.168.3.35:8000/v1/Articles/List'; // 请求的 URL
  console.log('请求的URL:', url); // 输出请求的 URL

  return request({
    url: url,
    method: 'get',
    params: {
      page: query.page, // 传递页码参数
      limit: query.limit // 传递每页数量参数
    }
    
  })
}

export function fetchArticle(query) {
  const url = 'http://192.168.3.35:8000/v1/domain/info/List'; // 请求的 URL
  console.log('请求的URL:', url); // 输出请求的 URL

  return request({
    url: url,
    method: 'get',
    params: {
      page: query.page, // 传递页码参数
      limit: query.limit // 传递每页数量参数
    }
    
  })
}

export function fetchHeader(query) {
  const url = 'http://192.168.3.35:8000/v1/SpiderInfo/List'; // 请求的 URL
  console.log('请求的URL:', url); // 输出请求的 URL

  return request({
    url: url,
    method: 'get',
    params: {
      page: query.page, // 传递页码参数
      limit: query.limit // 传递每页数量参数
    }
    
  })
}

export function fetchSite(query) {
  const url = 'http://192.168.3.35:8080/v1/SiteInfo/List'; // 请求的 URL
  console.log('请求的URL:', url); // 输出请求的 URL

  return request({
    url: url,
    method: 'get',
    params: {
      page: query.page, // 传递页码参数
      limit: query.limit // 传递每页数量参数
    }
    
  })
}

export function fetchCreate(query) {
  const url = 'http://192.168.3.35:8000/v1/domain/infoALL/List'; // 请求的 URL
  console.log('请求的URL:', url); // 输出请求的 URL

  return request({
    url: url,
    method: 'get',
    params: {
      page: query.page, // 传递页码参数
      limit: query.limit // 传递每页数量参数
    }
    
  })
}

import axios from 'axios';

export function addSite(data) {
  const url = 'http://192.168.3.35:8080/v1/crud/'; // 后端新增数据的 API 地址

  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}