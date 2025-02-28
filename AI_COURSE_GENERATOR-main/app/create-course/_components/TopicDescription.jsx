import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { HiOutlineCalendar, HiMiniPencilSquare } from "react-icons/hi2";
import { useContext } from 'react';
import { UserInputContext } from '@/app/_context/UserInputContext';

function TopicDescription() {

  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);


  const handleInputChange = (feildName, value) => {

    setUserCourseInput(prev => ({
      ...prev,
      [feildName]: value
    }))
  }
  return (
    <div className='mx-20 lg:mx-44 '>
      {/* {TOPIC} */}
      <div className='mt-9'>
        <label className='flex gap-2 mb-2'> <HiMiniPencilSquare /> Write the topic for which you want to generate the course : </label>
        <Input placeholder={'Topic'} className="h-14 text-xl"
          defaultValue = {userCourseInput?.topic}
          onChange={(e) => handleInputChange('topic', e.target.value)}
        />
      </div>
      <div className='mt-9'>
        <label className='flex gap-2 mb-2'> <HiOutlineCalendar /> Tell us more about the course you want to generate (Optional) : </label>
        <Textarea placeholder='Course Description'
          className="h-24 text-xl"
          defaultValue = {userCourseInput?.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>
      {/* {Text Area Desc} */}

    </div>
  )
}

export default TopicDescription
