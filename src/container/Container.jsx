import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'

const InnerRoute = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </>
    )
}
const Container = () => {
  return (
   <Router>
        <InnerRoute />
   </Router>
  )
}

export default Container