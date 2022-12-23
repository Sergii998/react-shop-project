import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello React.js</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ab
                aut soluta officia minus in. Minima totam asperiores, at, id
                voluptas odio quam autem a reprehenderit dicta hic culpa
                tenetur.
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
