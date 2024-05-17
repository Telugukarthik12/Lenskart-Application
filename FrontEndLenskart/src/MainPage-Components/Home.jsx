import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Homepage from './HomePage';
import UserLogin from '../User-Components/UserLogin';
import AdminLogin from '../Admin-Components/AdminLogin';
import AdminPage from '../Admin-Components/AdminPage';
import UserPage from '../User-Components/UserPage';
import UserRegister from '../User-Components/UserRegister';
import HomeNavbar from './HomeNavbar';
const Home = () => {
    return (
        <div>
            <HomeNavbar />
            <Router>

                <Switch>
                    <Route exact path="/" component={Homepage}></Route>
                    <Route exact path="/user" component={UserLogin}></Route>
                    <Route exact path="/admin" component={AdminLogin}></Route>
                    <Route exact path="/adminpage" component={AdminPage}></Route>
                    <Route exact path="/userpage" component={UserPage}></Route>
                    <Route exact path="/userregister" component={UserRegister}></Route>

                </Switch>
            </Router>

        </div>
    );
}

export default Home;