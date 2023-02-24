import { Categories, Signup } from '../Pages/index'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/categories' element={<Categories />} />
            </Routes>
        </>
    )
}

export default AppRoutes