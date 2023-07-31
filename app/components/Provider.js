"use client";


import { ThemeProvider } from 'next-theme'
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Provider = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
        <div className='flex min-h-screen flex-col justify-between'>
            <Navbar  />
            {children}
            <Footer/>
        </div>
    </ThemeProvider >
  )
}

export default Provider