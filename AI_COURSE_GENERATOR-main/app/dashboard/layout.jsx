import Header from './_components/Header'
import SideBar from './_components/SideBar'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <div className = 'md:w-64 hidden md:block'>
        <SideBar/>
      </div>
      <div className = 'md:ml-64 '>

       <Header/>
       <div className = 'p-10 '>
       {children}
       </div>
        
        </div>
        </ThemeProvider>
    </div>
  )
}

export default DashboardLayout