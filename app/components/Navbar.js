"use client"


import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Icons } from '@/app/components/Icons'
import { Poppins } from '@next/font/google';
const poppins = Poppins({
  subsets:['latin'],
  weight:['400','500','600','700','500','300'],
}) 
const Navbar = () => {


  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
    console.log(route.pathname);
  }, []);

  const route = useRouter();
  return (


    
    <nav className={` ${poppins.className} container relative top-0 z-30  w-full font-poppins min-h-[10vh] flex items-center `}>
    <div className="max-w-6xl mx-auto w-full flex items-center ">
      <ul className={`list-none  flex   items-center  w-full px-6 space-x-10 font-medium`}>
        {/* <Link href={"/"}><Image unoptimized src={"/samosa.png"} width={40} height={40}/></Link> */}
        <Link href="/" className='flex-1 font-love sm:text-2xl md:text-4xl font-medium'>Samosaa</Link>
        
        <Link href="/">Home</Link>
        <Link href={"/contact"}>Contact</Link>
      </ul>

        {/* dark mode button  */}
      <div className=''>
        <button type='button' 
        onClick={()=> setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className='w-9 h-9 md:float-right  bg-zinc-500 rounded-lg dark:bg-zinc-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'>

{mounted && (
            <>
              {resolvedTheme === "dark" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </>
              )}
            </>
          )}
        </button>
        
         </div>
    </div>
  </nav>
  )
}

export default Navbar

