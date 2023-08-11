"use client";


import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import AdScript from './Ads';

const Provider = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
        <div className='flex min-h-screen flex-col justify-between'>
            <Navbar  />
            {children}
            <AdScript/>
            <Footer/>
        </div>
    </ThemeProvider >
  )
}

export default Provider