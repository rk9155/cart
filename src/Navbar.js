import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cart_icon_container}>
                <img style={styles.cart_icon} src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175270.png?token=exp=1640366543~hmac=3a34f18c80181c7de98086b498d89e45" />
                <span style={styles.cart_count}>{props.count} </span>
            </div>
        </div>
    );
}

const styles = {
    cart_icon:{
        height:32,
        marginRight:20
    },
    nav:{
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justContent:'flex-end',
        alignItems: 'center'
    },
    cart_icon_container:{
        position: 'relative'
    },
    cart_count:{
        background: 'yellow',
        borderRadius:'50%',
        padding: '4px, 8px',
        position: 'absolute',
        right:0,
        top:-9
    }
}
export default Navbar;