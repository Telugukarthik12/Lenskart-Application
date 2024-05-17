import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const styling = makeStyles(
    {
        AllProducts: {
            marginLeft: '40px',
            textDecoration: 'none',
            color: 'white'
        },
        MyCart: {
            marginLeft: '40px',
            textDecoration: 'none',
            color: 'white'
        },

        logout: {
            marginLeft: '730px',
            textDecoration: 'none',
            color: 'white'
        }
    }
)

const UserNavbar = () => {
    const styles = styling();

    return (
        <AppBar position='static' color='secondary'>
            <Toolbar variant="dense">
                <NavLink to="viewproducts" className={styles.AllProducts}>All Products</NavLink>
                <NavLink to="cart" className={styles.MyCart}>My Cart</NavLink>
                <NavLink to="orders" className={styles.MyCart}>My Orders</NavLink>
                <NavLink to="/ulogout" className={styles.logout}>Logout</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default UserNavbar;