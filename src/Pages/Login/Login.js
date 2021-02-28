import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './login.css';
// import fx from "../../assets/fx.png";
// import googlephotos from "../images/google-photos.png";
// class Login extends React.Component{
//     state={
//         email:'',
//         pwd:''
//     }
   

    const Login = (props) => {
            
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    console.log("bb", props)
    const history = useHistory()

  const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem("token", '123h');
        history.push("/home");
    }


        return(
            <div>
            <div>
            {/* <img src={fx} alt="logo" /> */}
        <img src="https://lun-eu-assets.s3.eu-central-003.backblazeb2.com/yVSgi0i320Wg55K6Ag81bw/ii2o9yLRv0mYUPNIWPgaQg/Canary%20FX_Logo.png" width='270' alt="" />
    </div>
<body className="align">
                <div className="login">
                <header className="login__header">
                <h2 >Login</h2>

                {/* <form action=" #" className="login__form" > */}
                <form className="login__form" onSubmit = {handleSubmit}>

                <div>
                <label htmlfor="email">Email</label>
                {/* <input className="input-head" type="email" id="email" name="email" placeholder="mail@mail.com" />  */}
                <input  className="input-head" type='email' id="email" name='email' placeholder='mail@mail.com' required  value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                <label htmlfor="password">password</label>
                {/* <input className="input-head" type="password" id="password" name="password" placeholder="password" />  */}
                 <input  className="input-head" type='password' id="password"  name='pwd' placeholder='password...' required value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <div>
                {/* onChange={this.handleInputChange} */}
                  <input className="button" type="submit"  onSubmit={handleSubmit} value="Login" />
                {/* <input className="button" type="submit" value="Login" /> */}
                </div>
                </form>

                <Link to="/Forgotpwd">
                    <div className="content">
                <div className="pass-link">
                <a href="/">Forgot password?</a></div>
                </div>
                 </Link>
                 <br />
                 <Link to="/Signup">
                    <div className="signup-link">
                    Don't have an account? <a className="register" href=" #">Register here</a></div>
                    </Link>
    </header>
                </div>
                </body>

            </div>

        )
    // }
}
    
export default Login;