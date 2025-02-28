import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { HiMiniLightBulb } from "react-icons/hi2";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import Link from "next/link";

function CourseBasicInfo({ course,edit=true }) {

  const [selectedFile,setSelectedFile]=useState();
  const onFileSelected=(event)=>{
  const file=event.target.files[0];
  setSelectedFile(URL.createObjectURL(file));
    
 
  }
  return (
    <div 
      className="border p-6 rounded-xl shadow-md mt-6 bg-white mx-auto gap-4" 
      style={{ maxWidth: "1200px", minHeight: "200px" }} // Adjust minHeight as needed
    >
      {/* Inner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"> 
        {/* Left Section: Title and Description */}
        <div>
          <h2 className="font-bold text-3xl text-purple-500">
            {course?.courseOutput?.courseName} {course?.courseOutput?.CourseName}{edit&& <EditCourseBasicInfo course={course}  />}
          </h2>
          <p className="text-sm mt-4 text-gray-600 max-w-xs">
            {course?.courseOutput?.description}
            {course?.courseOutput?.Description}

          </p>

          <h2 className="flex items-center gap-2 mt-4 text-purple-600 text-lg font-semibold">
          <Image src = {'/light-bulb.gif'} width={35} height = {35} alt="Image"/>

             {course?.courseOutput?.category}
             {course?.courseOutput?.Category}
          </h2>

          {!edit&&<Link href={'/course/'+course?.courseId+"/start"}>
          <Button className="bg-primary w-1/2 text-white py-2 px-6 rounded-lg mt-6">
            Start
          </Button>
          </Link>}
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center p-4 bg-white-200 rounded-md relative">
  <label htmlFor="upload-image" className="cursor-pointer">
    <Image
      src={selectedFile ? selectedFile : '/place.png'}
      alt="Course Image"
      width={250} // Default width for placeholder image
      height={250} // Default height for placeholder image
      className={`rounded-xl object-cover cursor-pointer transition-all ${
        selectedFile ? "w-auto h-auto max-w-full max-h-[300px]" : "w-[250px] h-[250px]"
      }`}
    />
  </label>
  <input
    type="file"
    id="upload-image"
    className="absolute inset-0 opacity-0 cursor-pointer"
    onChange={onFileSelected}
  />
</div>

      </div>

    </div>
  );
}

export default CourseBasicInfo;

// function CourseBasicInfo({ course,refreshData}) {
//   return (
//     <div className="border p-6 rounded-lg shadow-md mt-6 bg-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <h2 className="font-bold text-3xl text-purple-500">
//             {course?.courseOutput?.course?.name}<EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/>
//           </h2>
//           <p className="text-sm text bg-white mt-4">
//             {course?.courseOutput?.course?.courseName}
//           </p>
//           <h2 className="flex items-center gap-2 mt-4 text-purple-600" ><HiOutlinePuzzle/></h2>
//           <button className="bg-primary  text-purple-600 py-2 px-6 rounded mt-6">
//             Start
//           </button>
//         </div>
        
//         <div>
//           <Image
//             src={"/place.png"}
//             alt="Course Image"
//             width={100}
//             height={100}
//             className="w-full h-[300px] object-cover rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseBasicInfo;
