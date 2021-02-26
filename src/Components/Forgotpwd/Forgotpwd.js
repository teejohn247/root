import React from 'react';
import './Forgotpwd.css';
import { Link } from 'react-router-dom';
class Forgotpwd extends React.Component{
    state={   
        email:'',
    }   

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
}     
    render(){
        return(  
            <div className="align-head">
            <div>
                <img src="https://lun-eu-assets.s3.eu-central-003.backblazeb2.com/yVSgi0i320Wg55K6Ag81bw/ii2o9yLRv0mYUPNIWPgaQg/Canary%20FX_Logo.png" width='270' alt="" />
            </div>
            <body className="align">
                <div className="login">
                <header className="login__header">
                <h2 >Forgot password</h2>
                <form className="login__form" onSubmit = {this.handleSubmit}>
                <div>
                <label htmlfor="email">Enter a registered email</label>
                <input className="input-head" type='email' name='email' placeholder='mail@mail.com' required onChange={this.handleChange}/>
                </div>
                
                <Link to="/Signup">
                <div>
                <input className="button" type="submit" value="Reset" />
                </div>
                </Link>

                </form>
                 <br />
                 <br />
                 <Link  to="/Signup">
                    <div className="signup-link">
                    Don't have an account? <a className="register" href=" #">Register here</a></div>
                    </Link>
    </header>
                </div>
                </body>
                </div>
        )
    }
}
    
export default Forgotpwd;


