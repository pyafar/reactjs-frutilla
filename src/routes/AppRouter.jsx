import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Cart from '../pages/Cart'

const AppRouter = () => {
  return (

    <Routes>
        <Route path={"/"} element={<Home />}/>

        {/* La idea acá sería que cuando no hay un id muestre todo, y cuando lo haya, se filtre*/}
        <Route path={"/category/:id"} element={<Category />}/>

        <Route path={'/cart'} element = { <Cart /> } />

        <Route path={'/cart'} element = { <Cart /> } />
        
        <Route path={'/cart'} element = { <Cart /> } />

    </Routes>
  )
}

export default AppRouter