import React from "react";
import "./LoginRegister.css";
import {useState,useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const LoginRegister = (props) => {

  const [data,setdata] = useState("")

  const [name,setName] = useState("")
  const [password,setpassword] = useState("")
  
const getData = () => {
    axios.get("http://localhost:3000/login").then(res => {
      setdata(res.data)
    }).catch(err => {
      console.log("getting data failed", err);
    });}
 
  const postStudentData = (event) => {
    axios.post("http://localhost:3000/login",{name:name,password:password})
      
    event.preventDefault()
    console.log(name,password)
  }   

  const getregisterData = () => {
    axios.get("http://localhost:3000/login").then(res => {
      setdata(res.data)
    }).catch(err => {
      console.log("getting data failed", err);
    });}

  const postregisterData = async (event) => {
    await axios.post("http://localhost:3000/register",{name:name,password:password})
      
    event.preventDefault()
    console.log(name,password)
  }   


    useEffect(() => {
      getData()
    })

    useEffect(() => {
      getregisterData()
    })



  return (
    // <form>
    // <input type="text" }></input>
    // <input type="text" onChange={(event) => {setpassword(event.target.value)}}></input>
    // <button onClick={postStudentData}>Login</button>
    // <button onClick={postregisterData}>Register</button>
    // </form>
    <>
      <div id="login">
        <div className="login-header">
          <img src="" alt="Logo" />
          <p className="login-text">{props?.title}</p>
          <p className="login-slogan">See Where your product is coming</p>
        </div>
        <div className="login-form">
          <form action="" method="get">
            <label className="login-lable" htmlFor="email">
              Email
            </label>
            <input
              className="login-input"
              type="text"
              id="email"
              placeholder="you@abc.com"
              onChange={(event)=> {setpassword(event.target.value)}}
            />
            <label className="login-lable" htmlFor="password">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="***********"
              onChange={(event) => {setpassword(event.target.value)}}
            />

            <a className="login-forgot" href="#">
              {props?.forgotPassword}
            </a>

            <button className="login-submit" type="submit" onClick={postStudentData}>
              {props?.button}
            </button>
          </form>
        </div>
      </div>
      <div className="register-redirect">
        <p>
          {props?.question}
          <a href={props?.redirect}>{props?.account}</a>
        </p>
      </div>
    </>
  );
};




export default LoginRegister;
