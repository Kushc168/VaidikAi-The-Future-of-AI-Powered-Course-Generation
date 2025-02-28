import React from "react";
import {
  HiChartBar,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlinePlay,
} from "react-icons/hi";
import Image from "next/image";

function CourseDetail({ course }) {
  return (
    <div className="border p-6 rounded-lg shadow-md mt-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-4">
        <Image src = {'/customer-satisfaction.gif'} width={45} height = {45} alt="Image"/>
          {/* <HiChartBar className="text-4xl  text-purple-600" /> */}
          <div>
            <h2 className="text-xs text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">{course?.level}{course?.Level}</h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Image src = {'/wait.gif'} width={45} height = {45} alt="Image"/>
          
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.duration}
              {course?.courseOutput?.Duration}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Image src = {'/countdown.gif'} width={45} height = {45} alt="Image"/>
          
          <div>
            <h2 className="text-xs text-gray-500">No of Chapters</h2>
            <h2 className="font-medium text-lg">
              {course?.numberOfChapters}-
              {course?.NoOfChapters}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <Image src = {'/play.gif'} width={45} height = {45} alt="Image"/>
          
          <div>
            <h2 className="text-xs text-gray-500">Video Included?</h2>
            <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

// import React from "react";
// import { HiChartBar,HiOutlineClock ,HiOutlineBookOpen,HiOutlinePlay } from "react-icons/hi";

// function CourseDetail({course}){
//     return(
//         <div className="border p-6 rounded-xl shadow-sm mt-3">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//              <div className="flex gap-2">
//              <HiChartBar className="text-4xl text-primary"/>
//              <div>
//                 <h2 className="text-xs text-gray-500">Skill Level</h2>
//                 <h2 className="font-medium text-lg">{course?.level}</h2>
//              </div>
//              </div>

//              <div className="flex gap-2">
//              <HiOutlineClock  className="text-4xl text-primary"/>
//              <div>
//                 <h2 className="text-xs text-gray-500">Duration</h2>
//                 <h2 className="font-medium text-lg">{course?.courseOutput?.course?.duration}</h2>
//              </div>
//              </div>

//              <div className="flex gap-2">
//              <HiOutlineBookOpen className="text-4xl text-purple-600"/>
//              <div>
//                 <h2 className="text-xs text-gray-500">No of Chapters</h2>
//                 <h2 className="font-medium text-lg">{course?.courseOutput?.course?.noOfChapters}</h2>
//              </div>
//              </div>

//              <div className="flex gap-2">
//              <HiOutlinePlay className="text-4xl text-primary"/>
//              <div>
//                 <h2 className="text-xs text-gray-500">Video Included?</h2>
//                 <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
//              </div>
//              </div>

//             </div>

//         </div>

// )
// }

// export default CourseDetail

// // import React from "react";

// // function CourseBasicInfo({course}){
// //     return(
// //         <div className="border p-6 rounded-xl shadow-sm mt-3">
// //             <div className="grid grid-cols-2 md:grid-cols-3">
// //              <div>
                
// //              </div>
// //             </div>

// //         </div>

// // )
// // }

// // export default CourseBasicInfo