import React from 'react'
import ReactDOM from 'react-dom/client'
// підхід JSX - це сучасніший метод_____________________
// const h1 = <h1 id="title" className="test">Hello world</h1>

// without jsx, консервативний підхід по якому все працює___
const h1 = React.createElement(
    'h1',
    { id: 'title', className: 'test' },
    'Hello React'
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{h1}</React.StrictMode>)
