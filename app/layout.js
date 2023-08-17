import Head from 'next/head'
import Provider from './components/Provider'
import './globals.css'
import {Poppins,Roboto} from"@next/font/google"

const roboto = Roboto({
  subsets:['latin'],
  weight:['400','700','500','300'],
  
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

     <Head>
     <title>Instagram reel saver</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="By Team Samosaa" />
      <link rel="icon" href="/favicon.ico" />

  </Head>
      
      <body className='overflow-x-hidden bg-white text-gray-900 dark:bg-neutral-900 dark:text-slate-100' >
        
        <Provider>
        {children}
        </Provider>
        
        </body>
    </html>
  )
}
