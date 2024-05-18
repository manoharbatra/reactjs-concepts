import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
// catch root element
const rootDiv = document.getElementById('root')

// create virtual DOM
const reactRoot = ReactDOM.createRoot(rootDiv)

reactRoot.render(<App />)
*/