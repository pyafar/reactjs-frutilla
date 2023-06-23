import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Cart from '../pages/Cart'
import Detail from '../pages/Detail'

const AppRouter = () => {
  return (

    <Routes>
        <Route path={"/"} element={<Home />}/>

        {/* La idea acá sería que cuando no hay un id muestre todo, y cuando lo haya, se filtre*/}
        <Route path={"category/:categoryName"} element={<Category />}/>

        <Route path={'detail/:id'} element = { <Detail /> } />

        <Route path={'/cart'} element = { <Cart /> } />
        
        <Route path={'/cart'} element = { <Cart /> } />

    </Routes>
  )
}

export default AppRouter