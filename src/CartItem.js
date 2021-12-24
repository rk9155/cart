import React from 'react';

class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            price: 99,
            title:'Phone',
            qty: 1,
            img :''
        }
    }
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt = "" style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={ { fontSize:25 } }>{this.state.title}</div>
                    <div style={ { color:'grey' } }>Price: {this.state.price}</div>
                    <div style={ { color:'grey' } }>Quantity: {this.state.qty}</div>

                    <div className="cart-item-actions">
                        {/*Button*/}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius:4,
        backgroundColor:'grey'
    }
}

export default CartItem;