import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Restaurant from './Restaurant';
import Details from './Details';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/restaurant" element={<Restaurant/>}/>
            <Route path="/details" element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes