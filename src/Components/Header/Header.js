import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/instagram.svg';
// import {ReactComponent as canary} from '../../assets/canary.png';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Explore} from '../../assets/explore.svg';
import './header.css';
const Header = ({history, isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(  
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/')}>
                 {/* <img
                className="features-img"
                alt="logo"  
                src={canary}
              /> */}
                    <Logo/>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/' activeClassName='active'><Home className='div-svg'/></NavLink>
                    <NavLink exact to='/explore' activeClassName='active'><Explore className='div-svg'/></NavLink>
                    <button className='button-header' onClick={handleClick}>Log out</button>
                    {/* <button className='logout' onClick={handleClick}>Log out</button> */}
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);