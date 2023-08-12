import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./LoginRegister.css"

const SignIn = () => {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/login",{name:name,password:password})
    .then(result => {
        console.log(result.data)
        if(result.data === "User found"){
            navigate('/')
        } 
    })
    .catch(err => console.log(err))
    
  }




  return (
    <div id="login">
        <div className="login-header">
          <img src="" alt="Logo" />
          <p className="login-text">Login</p>
          <p className="login-slogan">See Where your product is coming</p>
        </div>
        <div className="login-form">
          <form action="" method="get" onSubmit={handleSubmit}>
            <label className="login-lable" htmlFor="email">
              Email
            </label>
            <input
              className="login-input"
              type="text"
              id="email"
              placeholder="you@abc.com"
              onChange={(event)=> {setName(event.target.value)}}
            />
            <label className="login-lable" htmlFor="password">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="***********"
              onChange={(event) => {setPassword(event.target.value)}}
            />

           

            <button className="login-submit" type="submit" >
              Login
            </button>
          </form>
        </div>
      </div>
  )
}


export default SignIn
