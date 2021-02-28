import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore'
import Profile from '../Profile/Profile';
// import ForgotPwd from '../ForgotPwd/ForgotPwd'
const Home = () => {
    return(   
        <div>
            <Header />
            <NewHome />
            <Explore />
        </div>
    )   
}

export default Home;