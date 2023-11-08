import { useState } from "react"
import "./App.css"

function App() {
  const [isLogin,setisLogin] = useState(true)

  const signup = () =>{
    setisLogin(!isLogin)
  }


  return (
    <div className="main-container">
      <div className="form-container">
        <input hidden = {isLogin} type = "text" placeholder="Mobile Number or Email"></input>
        <input hidden = {isLogin} type = "text" placeholder="Full Name"></input>
        <input type = "text" placeholder="Phone Number,email or username"></input>
        <input type = "password" placeholder="Password"></input>
        <button>{isLogin ? "Sign in" : "Sign up"}</button>
        <p>{isLogin ? "Don't Have an account" : "have an account "} <span onClick={signup}>{isLogin ? "Sign up" : "Log in"}</span></p>





      </div>

    
    


    </div>
  )
}

export default App
