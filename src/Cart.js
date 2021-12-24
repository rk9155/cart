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

        handleIncreaseQuantity = (product) =>{
            const { products } = this.state;
            const index = products.indexOf(product);
            products[index].qty += 1;

            this.setState(
                {
                    products: products
                });
        }

        handleDecreaseQuantity = (product) =>{
            const { products } = this.state;
            const index = products.indexOf(product);

            if(products[index].qty === 0){
                return;
            }
            products[index].qty -= 1;

            this.setState(
                {
                    products: products
                });
        }

    
    render(){

        const {products} = this.state;
        return (
            <div className="cart">

                {products.map((product) =>{
                    return <
                        CartItem 
                        product={product} 
                        key = {product.id} 
                        OnIncreaseQuantity = {this.handleIncreaseQuantity}
                        OnDecreaseQuantity = {this.handleDecreaseQuantity}
                    />
                })}
            </div>
        );
    }
}

export default Cart;