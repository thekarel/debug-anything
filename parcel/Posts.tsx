import * as React from 'react'
import {Post} from './Post'
import * as postRepository from './postRepository'

const fetchBody = (id: number, setBody: (body?: string) => void) => () => {
  setBody()

  postRepository.getPostById(id).then(({body}) => setBody(body))
}

export const Posts = () => {
  const [posts, setPosts] = React.useState<Post[]>()
  const [body, setBody] = React.useState<string>()
  React.useEffect(() => {
    postRepository.getAllPosts().then(setPosts).catch(console.error)
  }, [])

  return (
    <>
      {!body && <h3>Post body will appear here 🔖</h3>}
      {body && (
        <h3>
          <i>{body}</i>
        </h3>
      )}
      {!posts && <h3>Post titles will appear here...</h3>}
      <ul>
        {posts &&
          posts.map(({id, title}) => (
            <li key={id}>
              <p onClick={fetchBody(id, setBody)} style={{textDecoration: 'underline', cursor: 'pointer'}}>
                {title}
              </p>
            </li>
          ))}
      </ul>
    </>
  )
}
