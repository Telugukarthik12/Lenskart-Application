import '../App.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const styling = makeStyles(
    {
        home: {
            color: '#ffc107',
            textDecoration: 'none'
        },
        user: {
            marginLeft: '40px',
            textDecoration: 'none',
            color: 'white'
        },
        admin: {
            marginLeft: '800px',
            textDecoration: 'none',
            color: 'white'
        }
    }
)

const HomeNavbar = () => {
    const styles = styling();
    let id = sessionStorage.getItem("id");
    return (

        <AppBar position="static" color='secondary' >
            <Toolbar variant="dense">
                <Typography variant="h4" color="inherit" component="div">
                    <NavLink to="/" className={styles.home}>LenksKart</NavLink>
                </Typography>

                <Typography variant="h6" color="inherit" component="div">
                    {
                        !id ? <NavLink to="/user" className={styles.user}>USER</NavLink> : ""
                    }
                </Typography>
                <Typography variant="h6" color="" component="div">
                    {
                        !id ? <NavLink to="/admin" className={styles.admin}>ADMIN</NavLink> : ""
                    }

                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default HomeNavbar;