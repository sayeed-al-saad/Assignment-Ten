import React from 'react'
import Navber from '../Shared/Navbar/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'


const Root = () => {
  return (
    <div className='bg-[#F8FAFC]'>
          <Navber></Navber>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default Root