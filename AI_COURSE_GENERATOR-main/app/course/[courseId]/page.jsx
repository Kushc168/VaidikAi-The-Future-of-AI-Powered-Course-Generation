"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/app/dashboard/_components/Header';
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicinfo';
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail';
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { use } from 'react';

function Course({ params }) {
    // Unwrap the params object
    const unwrappedParams = use(params);
    const [course, setCourse] = useState();

    useEffect(() => {
        if (unwrappedParams) {
            GetCourse(unwrappedParams.courseId);
        }
    }, [unwrappedParams]);

    const GetCourse = async (courseId) => {
        const result = await db
            .select()
            .from(CourseList)
            .where(eq(CourseList?.courseId, courseId));
        setCourse(result[0]);
        console.log(result);
    };

    return (
        <div>
            <Header />
            <div className="px-10 p-10 md:px-20 lg:px-44">
                <CourseBasicInfo course={course} edit={false} />
                <CourseDetail course={course} />
                <ChapterList course={course} />
            </div>
        </div>
    );
}

export default Course;
