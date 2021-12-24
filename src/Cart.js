import React from 'react';
import CartItem from './CartItem';


import './index.css';

class Cart extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title:'Phone',
                    qty: 1,
                    img :'',
                    id: 1
                },
                {
                    price: 88,
                    title:'Tablet',
                    qty: 1,
                    img :'',
                    id: 2
                },
                {
                    price: 77,
                    title:'Laptop',
                    qty: 1,
                    img :'',
                    id: 3
                },
                {
                    price: 66,
                    title:'Smart watch',
                    qty: 1,
                    img :'',
                    id: 4
                }
            ]
            
        }
    }

    render(){

        const {products} = this.state;
        return (
            <div className="cart">

                {products.map((product) =>{
                    return <CartItem product={product} key = {product.id} />
                })}
            </div>
        );
    }
}

export default Cart;