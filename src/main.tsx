import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Hello from './hello';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello />
    {/* <App /> */}
  </React.StrictMode>,
)