import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const styling = makeStyles(
    {
        navbaritems: {
            marginLeft: '20px',
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

const AdminNavbar = () => {
    const styles = styling();

    return (
        <AppBar position='relative' color='secondary'>
            <Toolbar variant="dense">
                <NavLink to="allusers" className={styles.navbaritems}>All Users</NavLink>
                <NavLink to="productsall" className={styles.navbaritems}>All Products</NavLink>
                <NavLink to="allcategories" className={styles.navbaritems}>All Categories</NavLink>
                <NavLink to="allorders" className={styles.navbaritems}>All Orders</NavLink>
                <NavLink to="/alogout" className={styles.logout}>Logout</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default AdminNavbar;