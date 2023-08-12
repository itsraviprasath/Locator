import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./LoginRegister.css"

const SignUp = () => {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/register",{name:name,password:password})
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err))
    navigate("/")
  }

  return (
    <div id="login">
        <div className="login-header">
          <img src="" alt="Logo" />
          <p className="login-text">Register</p>
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
              Register
            </button>
          </form>
        </div>
      </div>
  )
}

export default SignUp;





