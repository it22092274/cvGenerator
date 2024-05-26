import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'

function RouteComp() {
  return (
    <Routes>
        <Router path="/" element={<WelcomePage />} />
    </Routes>
  )
}

export default RouteComp