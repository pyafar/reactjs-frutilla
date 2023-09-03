import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Order from '../pages/Order'
import Detail from '../pages/Detail'
import Contact from '../pages/Contact'
import About from '../pages/About'

const AppRouter = () => {
  return (

    <Routes>
        <Route path={"/"} element={<Home />}/>

        {/* La idea acá sería que cuando no hay un id muestre todo, y cuando lo haya, se filtre*/}
        <Route path={"category/:categoryName"} element={<Category />}/>

        <Route path={'detail/:id'} element = { <Detail /> } />
        
        <Route path={'about'} element = { <About /> } />

        <Route path={'/contact'} element = { <Contact /> } />
        
        <Route path={'/order'} element = { <Order /> } />

    </Routes>
  )
}

export default AppRouter