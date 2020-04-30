import {Post} from './Post'

export const getAllPosts = (): Promise<Post[]> =>
  fetch('//jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => posts.slice(0, 10))

export const getPostById = (id: number): Promise<Post> =>
  fetch(`//jsonplaceholder.typicode.com/posts/${id}`).then((response) => response.json())
