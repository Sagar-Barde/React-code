import React from 'react'
import  Menu from './Menu'
import Home from './Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Link,Outlet } from 'react-router-dom'
import About from './About'



export default function App() {
  return (
    

    
    <BrowserRouter>


  <Routes >
<Route path='' exact element={<Menu/>}>
<Route path='home' exact element={<Home/>}></Route>
<Route path='about' exact element={<About/>}></Route>

</Route>
  </Routes>

    </BrowserRouter>
    
  )
}
