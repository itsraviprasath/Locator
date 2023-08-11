import "./App.css";
import { Login, Register } from "./Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
//   const [data,setdata] = useState("")

//   const [name,setName] = useState("")
//   const [password,setpassword] = useState("")
  
// const getData = () => {
//     axios.get("http://localhost:3000/login").then(res => {
//       setdata(res.data)
//     }).catch(err => {
//       console.log("getting data failed", err);
//     });}
 
//   const postStudentData = (event) => {
//     axios.post("http://localhost:3000/login",{name:name,password:password})
      
//     event.preventDefault()
//     console.log(name,password)
//   }   

//   const getregisterData = () => {
//     axios.get("http://localhost:3000/login").then(res => {
//       setdata(res.data)
//     }).catch(err => {
//       console.log("getting data failed", err);
//     });}

//   const postregisterData = async (event) => {
//     await axios.post("http://localhost:3000/register",{name:name,password:password})
      
//     event.preventDefault()
//     console.log(name,password)
//   }   


//     useEffect(() => {
//       getData()
//     })

//     useEffect(() => {
//       getregisterData()
//     })

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>


  );
}

export default App;
