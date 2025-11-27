import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./include/Header"
import Home from "./Home"
import Member from "./sub/Member"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/style.scss";


function App() {


  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/member" element={<Member/>}/>
</Routes>
</BrowserRouter>    

    </>
  )
}

export default App
