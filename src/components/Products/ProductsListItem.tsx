import { Card, CardActions, CardContent, Button } from '@mui/material'

import TextField from '@mui/material/TextField'
import { Component } from 'react'

import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    color: string
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    changeColor() {
        this.setState({
            color: 'red',
        })
    }

    render() {
        const { title, desc, type, capacity, price, image } = this.props

        return (
            <Card className="product-list-item">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="product-title">{title}</h4>
                    <p className="product-desc"> {desc} </p>
                    <div className="product-features">
                        <span>Type:</span> {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {capacity} gb
                    </div>
                    <p>Color:{this.state.color}</p>
                    <button onClick={() => this.changeColor()}>
                        Change color
                    </button>
                    <div className="product-price"> {price} $</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick()}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
