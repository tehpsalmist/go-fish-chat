import React from 'react'
import { render } from 'react-dom'

export const App = props => {
  return <main className='bg-indigo-600 min-h-screen flex-center text-green-400'>Hello World!</main>
}

render(<App />, document.getElementById('app'))
