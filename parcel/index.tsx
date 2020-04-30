import * as React from 'react'
import reactDom from 'react-dom'
import {Posts} from './Posts'

const App = () => (
  <>
    <h1>Posts 🦜</h1>
    <Posts />
  </>
)

reactDom.render(<App />, document.querySelector('#root'))
