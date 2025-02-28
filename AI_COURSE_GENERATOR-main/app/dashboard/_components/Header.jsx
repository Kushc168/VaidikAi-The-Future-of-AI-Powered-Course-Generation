import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/ui/ModeToggle';




function Header() {
  return (
    <div className = 'flex justify-between items-center p-7 shadow-sm'>
      <Image src = {'/logo.svg'} width = {50} height = {50} alt="Image"/>
      <Image src = {'/image.png'} width = {50} height = {50} alt="Image"/>
      
      <div className = 'flex gap-5'>
      <ModeToggle/>
      <UserButton/>
      </div>
    </div>
  )
}

export default Header
