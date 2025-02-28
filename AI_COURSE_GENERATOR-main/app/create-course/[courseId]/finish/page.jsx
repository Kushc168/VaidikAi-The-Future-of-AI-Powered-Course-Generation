"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import {and, eq } from "drizzle-orm";
import React,{useState,useEffect} from "react";
import CourseBasicInfo from "../_components/CourseBasicinfo";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

function FinishScreen({params}) {
  const { user } = useUser();
  const [course, setCourse] = useState();
  
  const router=useRouter();
  


  useEffect(() => {
   
    params && GetCourse();
  
  }, [params,user])

  const GetCourse = async() =>{
    const result = await db
          .select()
          .from(CourseList)
          .where(
            and(
              eq(CourseList.courseId,params?.courseId),
              eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)
            )
          )
          setCourse(result[0]);
          console.log(result);
  }


  return (
    <div className='px-10 md:px-20 lg;px-44 my-7'>
      <h2 className = 'text-center font-bold text-2xl my-3 text-purple-500'>Your Course is ready </h2>

      

     <CourseBasicInfo course={course} refreshData={()=>console.log()}/>
      <h2 className = 'mt-3 ml-9'>Course URL</h2>

     <h2 className = 'text-center text-gray-400 border p-2 rounded-md ml-9 flex gap-5'
      style={{ maxWidth: "1200px" }}>
      {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
      <HiOutlineClipboardDocument className='h-5 w-5 cursor-pointer' 
      onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+"/course/view/"+course?.courseId)} />
      </h2>

     
    </div>
  )
}

export default FinishScreen











// "use client"
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from 'next/router';
// import { db } from "@/configs/db";
// import { CourseList } from "@/configs/schema";
// import { eq } from "drizzle-orm";

// import React, { useEffect,useState } from "react";
// import CourseBasicInfo from '../_components/CourseBasicinfo';

// function FinishScreen(params) {
//     return (
//   const { user } = useUser();
//   const [course, setCourse] = useState();
//   const router=useRouter();
//    useEffect(() => {
   
//     params && GetCourse();
  
//   }, [params,user])

//   const GetCourse = async() =>{
//     const result = await db
//           .select()
//           .from(CourseList)
//           .where(
//             and(
//               eq(CourseList.courseId, params?.courseId),
//               eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)
//             )
//           )
//           setCourse(result[0]);
//           console.log(result);
//   }    

// <div className='px-10 md:px-20 lg;px-44 my-7'>
//     <CourseBasicInfo course={course} refreshData={()=>console.log()}/>
//         </div>
//     )
// }

// export default Finish

