import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello React.js</h1>
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ab
                aut soluta officia minus in. Minima totam asperiores, at, id
                voluptas odio quam autem a reprehenderit dicta hic culpa
                tenetur.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ab
                aut soluta officia minus in. Minima totam asperiores, at, id
                voluptas odio quam autem a reprehenderit dicta hic culpa
                tenetur.
            </p>
        </>
    )
}
// стрілкова функція частіше застосовується, записуємо по шаблону, див нижче___
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
