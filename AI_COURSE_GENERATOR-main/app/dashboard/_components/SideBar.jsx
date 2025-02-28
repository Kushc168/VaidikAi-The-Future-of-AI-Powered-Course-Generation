"use client"
import React from 'react'
import Image from 'next/image';
import { HiOutlineHome,HiArrowLeftOnRectangle,HiOutlinePuzzlePiece,HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"




function SideBar() {
    const Menu = [
        {
             id : 1,
             name : 'Home',
             icon: <HiOutlineHome />,
             path: '/dashboard'
        },
        {
             id : 1,
             name : 'Explore',
             icon: <HiOutlineMagnifyingGlass />,
             path: '/dashboard/explore'
        },
        {
             id : 1,
             name : 'Upgrade',
             icon: <HiOutlinePuzzlePiece />,
             path: '/dashboard/upgrade'
        },
        {
             id : 1,
             name : 'Logout',
             icon: <HiArrowLeftOnRectangle />,
             path: '/dashboard/logout'
        }
    ]

    const path = usePathname();
  return (
    <div className = 'fixed h-full md:w-64 p-5 shadow-md'>
      <Image src = {'/logo2.svg'} width={60} height= {70} alt="Image" /> 
    
      <hr  className = 'my-5'/>
      <ul>
        {Menu.map((item,index)=>(
            <Link href={item.path}>
            <div className = {`flex items-center gap-2 text-gray-600 p-3 m-2 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3xs ${item.path==path && 'bg-gray-100 text-black'}`}>
                <div className = 'text-2xl'>{item.icon}</div>
                <h2>{item.name}</h2>
            </div>
            </Link>
        ))}
      </ul>

      <div className = 'absolute bottom-10 w-[80%]'>
      <Progress value={33} />
        <h2 className = 'text-sm my-2'> 1 Out of 5 Course Created</h2>
        <h2 className = 'text-sx text-gray-500'> Upgrade your plan for unlimted course generation </h2>
      </div>
    </div>
  )
}

export default SideBar;
