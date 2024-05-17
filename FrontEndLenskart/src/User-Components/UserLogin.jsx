import React, { useState } from 'react'
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeNavbar from '../MainPage-Components/HomeNavbar';

toast.configure();

const initialvalue = {
    email: "",
    password: ""
}
const UserLogin = () => {

    const [userdetails, setUserdetails] = useState(initialvalue)
    const history = useHistory();
    const onValueChange = (e) => {
        setUserdetails({ ...userdetails, [e.target.name]: e.target.value });
        console.log(userdetails);
    }

    const notifysuccess = (msg) => {
        toast.success(msg, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'colored'
        });
    }

    const notifyerror = (msg) => {
        toast.error(msg, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'colored'
        });
    }

    const userCredentialsValidation = async (data) => {
        let retriveCredentials = await fetch("http://localhost:8083/user/allCustomers")
        let validation = await retriveCredentials.json();
        let flag = false;
        console.log(validation);

        for (let i = 0; i < validation.length; i++) {
            if (validation[i].email === data.email && validation[i].password === data.password) {
                flag = true;
                sessionStorage.setItem("id", validation[i].id);
            }
        }
        if (flag === true) {
            notifysuccess("User Login Successfull !!!!")
            history.push("/userpage")
        }
        else {
            notifyerror("User Credentials are Incorrect !!!!!!")
        }
    }
    return (
        <div>
            <HomeNavbar />
            <div className='login-form'>

                <Container maxWidth="sm">
                    <Box my={5}>
                        <Typography variant="h5" align="center">User Login</Typography>
                        <FormGroup>
                            <FormControl>
                                <InputLabel>User Email</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="email" value={userdetails.email} />
                            </FormControl>
                            <FormControl>
                                <InputLabel>User Password</InputLabel>
                                <Input onChange={(e) => onValueChange(e)} name="password" value={userdetails.password} type="password" />
                            </FormControl>
                            <Box my={3}>
                                <Button variant="contained" onClick={() => userCredentialsValidation(userdetails)} color="primary" align="center">Login</Button>
                                <Button onClick={() => history.push("/user")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                                <br></br><br></br>
                                Register if you are a new User !!  <Button variant="contained" onClick={() => history.push("/userregister")} style={{ marginLeft: '30px' }} color="secondary" align="center">Register</Button>
                            </Box>
                        </FormGroup>
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default UserLogin;