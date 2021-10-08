import request from '../request'
export function getBlogs() {
  return request({
    url: '/posts.json'
  })
}

export function addBlog(data) {
  return request({
    url: '/posts.json',
    method: 'post',
    data
  })
}

export function singleBlog(id) {
  return request({
    url: `/posts/${id}.json`
  })
}

export function delBlog(id) {
  return request({
    url: `/posts/${id}.json`,
    method: 'delete'
  })
}

export function editBlog(id, blog) {
  return request({
    url: `/posts/${id}.json`,
    method: 'put',
    data: blog
  })
}
