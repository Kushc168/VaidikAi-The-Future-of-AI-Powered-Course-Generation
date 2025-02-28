import React from "react";
import { HiClock, HiOutlineBadgeCheck } from "react-icons/hi";
import EditChapters from "./EditChapters";


// function ChapterList({course}){
//   return(
//     <div>
//       <h2>
//         Chapters
//       </h2>
//       <div>
//         {course?.courseOutput?.Chapters.map((chapter,index)=>(
//           <div>
//             <h2>{index+1}</h2>
//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }
// export default ChapterList

function ChapterList({ course }) {
  return (
    <div className="m-4">
      <h2 className="text-2xl font-semibold m-9">Chapters</h2>
      <div className="mt-2 space-y-4">
        {(course?.courseOutput?.chapters || course?.courseOutput?.Chapters)?.map((Chapters, index) => (
          <div
            key={index}
            className="flex items-start justify-between bg-gray-50 p-4 rounded-md  shadow-md gap-3 m-2"
          >
            {/* Left Section */}
            <div className="flex gap-4 items-start">
              {/* Chapter Number */}
              <h2 className="bg-primary flex-none h-10 w-10 text-white rounded-full text-center flex items-center justify-center">
                {index + 1}
              </h2>

              {/* Chapter Details */}
              <div>
                <h2 className="text-2xl font-extrabold text-black">
                  {Chapters?.ChapterName || Chapters?.chapterName || Chapters?.Chapter_Name } <EditChapters course={course} index={index}/></h2>
                <p className="text-sm text-purple-500 mt-1">{Chapters?.About || Chapters?.about}</p>
                <p className="flex gap-2 items-center text-primary mt-2">
                  <HiClock />
                  {Chapters?.Duration}
                </p>
              </div>
            </div>

            {/* Right Section: Tick Icon */}
            <HiOutlineBadgeCheck className="text-4xl text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;






// import React from "react";
// import { HiClock, HiOutlineBadgeCheck } from "react-icons/hi";

// function ChapterList({ course }) {
//   return (
//     <div className="mt-2">
//       <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
//       <div className="mt-2 space-y-4">
//         {course?.courseOutput?.chapters.map((chapter, index) => (
//           <div
//             key={index}
//             className="flex gap-4 items-start bg-gray-50 p-4 rounded-md shadow-sm"
//           >
//             {/* Chapter Number */}
//             <h2 className="bg-primary flex-none h-10 w-10 text-white rounded-full text-center flex items-center justify-center">
//               {index + 1}
//             </h2>

//             {/* Chapter Details */}
//             <div className="flex-1">
//               <h2 className="text-2xl font-extrabold text-black">
//                 {chapter?.name}
//                 <HiOutlineBadgeCheck className="text-xl text-gray-300 ml-2" />
//               </h2>
//               <p className="text-sm text-purple-500 mt-1">{chapter?.about}</p>
//               <p className="flex gap-2 items-center text-primary mt-2">
//                 <HiClock />
//                 {chapter?.duration}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChapterList;
