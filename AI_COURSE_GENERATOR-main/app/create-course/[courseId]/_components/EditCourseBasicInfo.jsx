import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { CourseList } from "@/configs/schema";
// import { db } from "@/db"; // Assuming you have a `db` instance for your database operations
// import { eq } from "@/db/utils"; // Replace with the correct import path for the `eq` function

function EditCourseBasicInfo({ course, refreshData }) {
  // State to manage inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Populate the fields when the component loads or the course prop changes
  useEffect(() => {
    if (course?.courseOutput) {
      setName(course?.courseOutput?.courseName || "");
      setDescription(course?.courseOutput?.description || "");
    }
  }, [course]);

  // Update course information in the database
  const onUpdateHandler = async () => {
    if (!course || !course.courseOutput) {
      console.error("Course or courseOutput is missing.");
      return;
    }

    const updatedCourseOutput = {
      ...course.courseOutput,
      courseName: name,
      description: description,
    };

    try {
      // Update the course in the database
      const result = await db
        .update(CourseList)
        .set({ courseOutput: updatedCourseOutput })
        .where(eq(CourseList.id, course.id))
        .returning({ id: CourseList.id });

      console.log("Course updated successfully:", result);
      refreshData(true); // Refresh parent component data
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="icon">
          <HiPencilAlt />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Course Title & Description</AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription>
          <div className="mt-3">
            <label htmlFor="course-title">Course Title</label>
            <Input
              id="course-title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter course title"
              defaultValue={course?.courseOutput?.courseName}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="course-description">Description</label>
            <Textarea
              id="course-description"
              className="h-40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter course description"
            />
          </div>
        </AlertDialogDescription>

        <AlertDialogFooter>
          <AlertDialogCancel>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button onClick={onUpdateHandler}>Update</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditCourseBasicInfo;

// import React, { useEffect, useState } from "react";
// import { HiPencilAlt } from "react-icons/hi";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { CourseList } from "@/configs/schema";
// import { Input } from "@/components/ui/input";  // Adjust if needed

// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   AlertDialogTrigger,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogAction,
//   AlertDialogCancel,
// } from "@/components/ui/alert-dialog"; // Correct import from alert-dialog file

// function EditCourseBasicInfo({ course, refreshData }) {
//   const [name, setName] = useState();
//   const [description, setDescription] = useState();

//   useEffect(() => {
//     setName(course?.courseOutput?.courseName);
//     setDescription(course?.courseOutput?.description);
//   }, [course]);

//   const onUpdateHandler = async () => {
//     course?.courseOutput?.courseName = courseName;
//     course?.courseOutput?.description= description;

//     const result = await db
//       .update(CourseList)
//       .set({
//         courseOutput: course?.courseOutput,
//       })
//       .where(eq(CourseList?.id, course?.id))
//       .returning({ id: CourseList.id });

//     refreshData(true);
//   };

//   return (
//     <AlertDialog>
//       <AlertDialogTrigger>
//         <HiPencilAlt /> {/* Button or Icon to trigger dialog */}
//       </AlertDialogTrigger>

//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Edit Course Title & Description</AlertDialogTitle>
//           <AlertDialogDescription>
//             <div className="mt-3">
//               <label>Course Title</label>
//               <Input
//                 defaultValue={course?.courseOutput?.courseName}
//                 onChange={(event) => setName(event.target.value)}
//               />
//             </div>

//             <div className="mt-4">
//               <label>Description</label>
//               <Textarea
//                 className="h-40"
//                 defaultValue={course?.courseOutput?.description}
//                 onChange={(event) => setDescription(event.target.value)}
//               />
//             </div>
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <AlertDialogFooter>
//           <AlertDialogCancel>
//             <Button variant="outline">Cancel</Button>
//           </AlertDialogCancel>
//           <AlertDialogAction onClick={onUpdateHandler}>
//             <Button>Update</Button>
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// export default EditCourseBasicInfo;
// import React, { useEffect, useState } from "react";
// import { HiPencilAlt } from "react-icons/hi";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { CourseList } from "@/configs/schema";
// import {
//     AlertDialog,
//     AlertDialogContent,
//     AlertDialogOverlay,
//     AlertDialogTrigger,  // Ensure this is the correct import
//   } from "@/components/ui/alert-dialog";
  

  

// function EditCourseBasicInfo({course,refreshData}){

//     const[name,setName]=useState();
//     const[description,setDescription]=useState();
    
//     useEffect( ()=>{
//         setName(course?.courseOutput?.course?.name);
//         setDescription(course?.courseOutput?.course?.description);

//     },[course])

//     const onUpdateHandler=async()=>{
//         course.courseOutput.course.name=name;
//         course.courseOutput.course.description=description;

//         const result=await db.update(CourseList).set({
//             courseOutput:course?.courseOutput
//         }).where(eq(CourseList?.id,course?.id))
//         .returning({id:CourseList.id});

//         refreshData(true)

//         // console.log(result);
//     }

//     return(
//   <Dialog>
//   <DialogTrigger><HiPencilAlt /></DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Edit Course Title & description</DialogTitle>
//       <DialogDescription>
//        <div className="mt-3">
//          <label>Course Title</label>
//          <Input defaultValue={course?.courseOutput?.course?.name} onChange={(event)=>setName(event?.target.value)}/></div>
       
//        <div>
//         <label>Description</label>
//         <Textarea className="h-40" defaultValue={course?.courseOutput?.course?.description}
//         onChange={(event)=>setDescription(event?.target.value)}/>
//        </div>
//       </DialogDescription>
//     </DialogHeader>
//     <DialogFooter>
//         <DialogClose>
//             <Button onClick={onUpdateHandler}>Update</Button>
//         </DialogClose>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>

       
        

// )
// }

// export default EditCourseBasicInfo