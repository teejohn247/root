import { useState, useEffect } from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Forgotpwd from './Components/Forgotpwd/Forgotpwd';
// import Resetpwd from "./Pages/Resetpwd"
import Section from './Components/Section'
import Signup from "./Pages/Signup";  
import Home from './Pages/Home/Home';   
import NoMatch from './Pages/404Page/404Page';
// class App extends React.Component{
//   state={
//     isLog:false
//   }  

function App() {
  const [state, setState] = useState(false);
  const [cur, setCur] = useState(false);



  // handleNameChange = isLog => {
  //   this.setState({ isLog })
  // }

  const handleLogin = (newVal) => {
    setState(newVal)
  }

  const handleLogged = (newVal) => {
    setState(newVal)
  }

  const handleState = () => {
    setCur(false)
  }
  // render(){
    // const {isLog} = this.state;
    // console.log({isLog})
    return(
      <div>
        <Switch>
          {        
            !state ?
            // name={this.state.name} onNameChange={this.handleNameChange}
            <Route path="/">
            <Login currentState={handleState} isLogin={handleLogin} />
            </Route>
            // <Route exact path='/' render={() => <Login isLogin={handleLogin} />}/>
              :
            <Route path="/">
            <Home isLogin={handleLogin} />
            </Route>
            // <Route path='/' render={() =><Home handleLogged={handleLogged}/> }/>
          }
          {/* {
            !isLog ?
            <Route exact path='/' render={() => <ForgotPwd isLogin={this.handleLogin}/>}/>
              :
            <Route path='/' render={() =><Login handleLogged={this.handleLogin}/> }/>
          } */}
          {/* <Route path='/resetpwd' component={Resetpwd} /> */}
          <Route path='/signup' component={Signup} />
          <Route path='/forgotpwd' component={Forgotpwd} />
          <Route path='/section' component={Section} />
           <Route path='/home' component={Home} />
           <Route path='/login' component={Login} />

           {/* name={this.state.name} onNameChange={this.handleNameChange} */}

          {/* <Route path='/registration' component={Registration} /> */}
          {/* <Route path='/signup' component={Signup} /> */}
        <Route path='*' component={NoMatch}/>
        
        </Switch>
      </div>
    )
  // }
}

export default App;