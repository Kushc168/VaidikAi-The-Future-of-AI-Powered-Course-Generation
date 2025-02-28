import React from 'react'
import Image from 'next/image'
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiMiniQrCode } from "react-icons/hi2";
import { HiEllipsisVertical } from "react-icons/hi2";
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import DropdownOption from './DropdownOption';
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';


function CourseCard({ course, refreshData }) {

    const handleOnDelete = async () => {
        const resp = await db.delete(CourseList)
            .where(eq(CourseList.id, course?.id))
            .returning({ id: CourseList?.id })

        if (resp) {
            refreshData()
        }

    }


    return (
        <div className='shadow-sm rounded-lg border p-2 transition-all cursor-pointer hover:border-purple-500 mt-4'>

            <Link href={'/course/' + course?.courseId}>
                <Image src={course?.courseBanner} width={300} height={200}
                    className='w-full h-[200px] object-cover rounded-lg' alt='Img'
                />
            </Link>
            <div className='p-2 '>
                <h2 className='font-medium text-ld flex justify-between items-center'>{course?.courseOutput?.courseName}{course?.courseOutput?.CourseName}


                    <DropdownOption
                        handleOnDelete={() => handleOnDelete()}


                    ><HiEllipsisVertical /></DropdownOption>
                </h2>
                <p className='text-sm text-gray-400'> {course?.category}</p>

                <div className='flex items-center justify-between mt-2'>
                    <h2 className='flex gap-2 items-center p-2 bg-blue-100 text-primary text-sm rounded-sm '><HiOutlineBookOpen /> Duration : {course?.courseOutput?.duration}{course?.courseOutput?.Duration}</h2>
                    <h2 className='flex gap-2 items-center p-2 bg-blue-100 text-primary text-sm rounded-sm '><HiMiniQrCode /> Level : {course?.courseOutput?.level}{course?.courseOutput?.Level}</h2>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
