import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = <h1>Hello world</h1>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{h1}</React.StrictMode>)
