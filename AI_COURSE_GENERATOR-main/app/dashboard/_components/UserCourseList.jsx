"use client"
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import React , {useEffect,useState} from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs/db'
import CourseCard from './CourseCard'


const UserCourseList = () => {

  const [courseList,setCourseList] = useState([]);
  const {user} = useUser();

  useEffect(()=>{
    user&&getUserCourses();
  },[user])

  const getUserCourses=async()=>{
    const result=await db.select().from(CourseList)
    .where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress))
    console.log(result);
    setCourseList(result);
  }
  return (
    <div className = 'mt-10'>
      <h2 className ='font-medium text-xl mb-3'>My Courses</h2>

      <div className = 'grid grid-cols-2 md:grid-cols-2 lg-grid-3 gap-4'>
        {courseList?.length>0?courseList.map((course,index)=>(
          <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
        ))
      :
      [1,2,3,4,5].map((item,index) =>(
        <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]'>
        </div>
      ))
     
      
      }
      </div>
    </div>
  )
}

export default UserCourseList
