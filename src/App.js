import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './Components/Register';



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App