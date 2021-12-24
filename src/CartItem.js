import React from 'react';

class CartItem extends React.Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         price: 99,
    //         title:'Phone',
    //         qty: 1,
    //         img :''
    //     }
    // }

    // increaseQuantity = () => {
        // console.log('this',this.state);

        // set State form 1 (if previous state is not required we can use it)
        // this.setState({
        //     qty: this.state.qty+1
        // });

        // set State form 2 (if previous state is required we can use it)

    //     this.setState((previousState)=> {
    //         return{
    //             qty: previousState.qty+1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {

    //     if(this.state.qty === 0){
    //         return;
    //     }
        
    //     this.setState((previousState)=> {
    //         return{
    //             qty: previousState.qty-1
    //         }
    //     });
    // }

    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt = "" style={styles.image} src = {this.props.product.img} />
                </div>

                <div className="right-block">
                    {/* <div style={ { fontSize:25 } }>{this.state.title}</div> */}
                    <div style={ { fontSize:25 } }>{this.props.product.title}</div>

                    {/* <div style={ { color:'grey' } }>Price: {this.state.price}</div> */}
                    <div style={ { color:'grey' } }>Price: {this.props.product.price}</div>

                    {/* <div style={ { color:'grey' } }>Quantity: {this.state.qty}</div> */}
                    <div style={ { color:'grey' } }>Quantity: {this.props.product.qty}</div>

                    <div className="cart-item-actions">
                        {/*Button*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 

                            /* onClick={this.increaseQuantity.bind(this)} */

                            // onClick={this.increaseQuantity}

                            onClick = {()=> this.props.OnIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 

                            // onClick={this.decreaseQuantity}
                            onClick = {()=> this.props.OnDecreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                            onClick = {()=> this.props.OnDeleteQuantity(this.props.product.id)}
                        />
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