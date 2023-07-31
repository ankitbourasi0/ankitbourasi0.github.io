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
      <head />
      <body >
        <Provider>
        {children}
        </Provider>
        </body>
    </html>
  )
}
