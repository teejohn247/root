import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore'
import Profile from '../Profile/Profile';
// import ForgotPwd from '../ForgotPwd/ForgotPwd'
const Home = ({isLogin}) => {
    return(   
        <div>
            <Header isLogged={isLogin}/>
            <Switch>
                <Route exact path='/' component={NewHome}/>
                <Route exact path='/explore' component={Explore}/>
                {/* <Route path="/forgotpwd" component={ForgotPwd} /> */}
                <Route path='/:username' component={Profile}/>
            </Switch>
        </div>
    )   
}

export default Home;