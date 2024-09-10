/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer/>
    </>
  )
}

export default Layout