"use client";

import { Chapters, CourseList } from "@/configs/schema";
import React, { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import ChapterListCard from "./_component/ChapterListCard";
import ChapterContent from "./_component/ChapterContent";
import { and } from "drizzle-orm";

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter,setSelectedChapter] = useState();
  const [chapterContent,setChapterContent]=useState();

  useEffect(() => {
    if (params?.courseId) {
      GetCourse();
    }
  }, [params]);

  // Fetch course details by courseId
  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.courseId, params.courseId));

      setCourse(result[0]);
      GetSelectedChapterContent(0)
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const GetSelectedChapterContent=async(chapterId)=>{

    const result=await db.select().from(Chapters)
    .where(and(eq(Chapters.chapterId,chapterId),
    eq(Chapters.courseId,course?.courseId)));

    setChapterContent(result[0])
    console.log(result)

  }

  return (
    <div className="flex">
      {/* LEFT Section (Sidebar) */}
      <div className="md:w-64 h-screen bg-blue-300 fixed">
        <h2 className='bg-purple-300 p-5 m-2 text-lg font-bold'>{course?.courseOutput?.courseName || "Course Name" || course?.courseOutput?.CourseName}</h2>
        {/* Display Chapter Index Below Course Name */}
        {course?.courseOutput?.chapters?.map((chapter, index) => (
            
          <div 
          
          className='cursor-pointer hover:bg-blue-200'
          onClick={()=>{setSelectedChapter(chapter);

            GetSelectedChapterContent(index)
          }}
          ><ChapterListCard chapter={chapter} index={index} 
          
          /></div>
        ))}
      </div>

      {/* RIGHT Section (Main Content) */}
      <div className="md:ml-72">
       <ChapterContent chapter={selectedChapter}
            content={chapterContent}
       />
      </div>
    </div>
  );
}

export default CourseStart;
