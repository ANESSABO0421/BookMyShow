import React from 'react'
import UserNavbar from '../../components/user/UserNavbar'
import Sidebar from '../../components/user/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <UserNavbar/>
        <div className='flex'>
            <Sidebar className="hidden md:flex"/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout