import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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

        handleDeleteProduct = (id) =>{
            const { products } = this.state;
            
            const items = products.filter(item => item.id !== id);

            this.setState({
                products: items
            })
        }

        getCartCount = () => {
          const { products } = this.state;
          let count = 0;

          products.forEach(product => {
            count += product.qty;
          })
          return count;
        }

  render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()} />
      <Cart 

        products = {products}
        OnIncreaseQuantity = {this.handleIncreaseQuantity}
        OnDecreaseQuantity = {this.handleDecreaseQuantity}
        OnDeleteQuantity = {this.handleDeleteProduct}
      />
    </div>);
}
}

export default App;
