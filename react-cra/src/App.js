import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState()
  const fetchTitle = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('404')
        }

        return response.json()
      })
      .then((post) => {
        setTitle(post.title)
      })
      .catch((error) => {
        setTitle('Title not found')
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title || 'No title yet'}</p>
        <button onClick={() => fetchTitle(1)}>Fetch title for post #1</button>
        <button onClick={() => fetchTitle(404)}>Fetch title for post #404</button>
      </header>
    </div>
  )
}

export default App
