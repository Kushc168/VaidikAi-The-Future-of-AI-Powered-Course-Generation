"use client"
import React,{ useState } from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContext } from '../_context/UserInputContext'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

function CreateCourseLayout({ children }) {
  const [userCourseInput,setUserCourseInput] = useState([]);
  return (
    <div>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <UserInputContext.Provider value={{userCourseInput,setUserCourseInput}}>
        <>
          <Header />
          {children}
        </>
      </UserInputContext.Provider>
      </ThemeProvider>
    </div>
  )
}


export default CreateCourseLayout
