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
                    img :'https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg',
                    id: 1
                },
                {
                    price: 88,
                    title:'Tablet',
                    qty: 1,
                    img :'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-202109-gallery-1?wid=2822&hei=2400&fmt=jpeg&qlt=80&.v=1629916218000',
                    id: 2
                },
                {
                    price: 77,
                    title:'Laptop',
                    qty: 1,
                    img :'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png',
                    id: 3
                },
                {
                    price: 66,
                    title:'Smart watch',
                    qty: 1,
                    img :'https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg',
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

        getCartTotal = () =>{
          const { products } = this.state;

          let total = 0;
          products.map((product) =>{
            total += product.qty * product.price;
          })

          return total;
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

      <div>TOTAL : {this.getCartTotal()} </div>
    </div>);
}
}

export default App;
