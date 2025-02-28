import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

function EditChapters({ course, index, refreshData }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (course?.courseOutput?.chapters?.[index]) {
      setName(course.courseOutput.chapters[index].chapterName);
      setAbout(course.courseOutput.chapters[index].about);
    }
  }, [course, index]);

  const onUpdateHandler = async () => {
    try {
      const updatedChapters = [...course.courseOutput.chapters];
      updatedChapters[index] = { ...updatedChapters[index], chapterName: name, about };

      const updatedCourse = {
        ...course,
        courseOutput: { ...course.courseOutput, chapters: updatedChapters },
      };

      const result = await db
        .update(CourseList)
        .set({ courseOutput: updatedCourse.courseOutput })
        .where(eq(CourseList.id, course.id))
        .returning();

      console.log("Chapter Update Result:", result);

      refreshData(); // Refresh the data in the parent component
      setIsDialogOpen(false); // Close the dialog after updating
    } catch (error) {
      console.error("Error updating chapter:", error);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <HiPencilAlt />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Chapter</DialogTitle>
        </DialogHeader>
        <div className="mt-3">
          <label>Chapter Title</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label>Description</label>
          <Textarea
            className="h-40"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={onUpdateHandler}>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditChapters;


// import React, { useEffect, useState } from "react";
// import { HiPencilAlt } from "react-icons/hi";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { db } from "@/configs/db";
// import { CourseList } from "@/configs/schema";
// import { eq } from "drizzle-orm";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// function EditChapters({ course, index, refreshData }) {
//   const [name, setName] = useState("");
//   const [about, setAbout] = useState("");

//   useEffect(() => {
//     if (course?.courseOutput?.chapters?.[index]) {
//       setName(course.courseOutput.chapters[index].chapterName);
//       setAbout(course.courseOutput.chapters[index].about);
//     }
//   }, [course, index]);

//   const onUpdateHandler = async () => {
//     try {
//       const updatedChapters = [...course.courseOutput.chapters];
//       updatedChapters[index] = { ...updatedChapters[index], chapterName: name, about };

//       const updatedCourse = {
//         ...course,
//         courseOutput: { ...course.courseOutput, chapters: updatedChapters },
//       };

//       const result = await db
//         .update(CourseList)
//         .set({ courseOutput: updatedCourse.courseOutput })
//         .where(eq(CourseList.id, course.id))
//         .returning();

//       console.log("Chapter Update Result:", result);
//       refreshData();
//     } catch (error) {
//       console.error("Error updating chapter:", error);
//     }
//   };

//   return (
//     <Dialog>
//       <DialogTrigger>
//         <HiPencilAlt />
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Edit Chapter</DialogTitle>
//         </DialogHeader>
//         <div className="mt-3">
//           <label>Chapter Title</label>
//           <Input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mt-4">
//           <label>Description</label>
//           <Textarea
//             className="h-40"
//             value={about}
//             onChange={(e) => setAbout(e.target.value)}
//           />
//         </div>
//         <DialogFooter>
//           <Button variant="outline">Cancel</Button>
//           <Button onClick={onUpdateHandler}>Update</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default EditChapters;

// import React, { useEffect, useState } from "react";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { HiPencilAlt } from "react-icons/hi";
// import { Input } from "postcss";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { CourseList } from "@/configs/schema";



// function EditChapters({course,index}){
//       const Chapters=course?.courseOutput?.chapters;
//       const [name,setName]=useState([]);
//       const [about,setAbout]=useState();


//       useEffect(()=>{
//        setName(Chapters[index].name) 
//        setAbout(Chapters[index].about)
//       },[course])
//       const onUpdateHandler=async()=>{
//         course.courseOutput.chapters[index].name=name;
//         course.courseOutput.chapters[index].about=about;

//         const result=await db.update(CourseList).set({
//             courseOutput:course?.courseOutput
//         }).where(eq(CourseList?.id,course?.id))
//         .returning({id:CourseList.id});



//         console.log(course);

//       }
//     return(
//         <Dialog>
//   <DialogTrigger><HiPencilAlt /></DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Edit Chapter </DialogTitle>
//       <DialogDescription>
//       <div className="mt-3">
//          <label>Course Title</label>
//          <Input  defaultValue={Chapters[index].name} 
//          onChange={(event)=>setName(event?.target.value)}/></div>
       
//        <div>
//         <label>Description</label>
//         <Textarea className="h-40" 
//         defaultValue={Chapters[index].about}
//         onChange={(event)=>setAbout(event?.target.value)}/>
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

// export default EditChapters
// import React, { useEffect, useState } from "react";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { HiPencilAlt } from "react-icons/hi";
// import { Input } from "postcss";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { CourseList } from "@/configs/schema";
  

// function EditChapters({course,index}){
//       const Chapters=course?.courseOutput?.chapters;
//       const [name,setName]=useState([]);
//       const [about,setAbout]=useState();


//       useEffect(()=>{
//        setName(Chapters[index].chapterName) 
//        setAbout(Chapters[index].about)
//       },[course])
//       const onUpdateHandler=async()=>{
//         course.courseOutput.chapters[index].chapterName=name;
//         course.courseOutput.chapters[index].about=about;

//         const result=await db.update(CourseList).set({
//             courseOutput:course?.courseOutput
//         }).where(eq(CourseList?.id,course?.id))
//         .returning({id:CourseList.id});



//         console.log(course);

//       }
//     return(
//         <Dialog>
//   <DialogTrigger><HiPencilAlt /></DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Edit Chapter </DialogTitle>
//       <DialogDescription>
//       <div className="mt-3">
//          <label>Course Title</label>
//          <Input  defaultValue={Chapters[index].chapterName} 
//          onChange={(event)=>setName(event?.target.value)}/></div>
       
//        <div>
//         <label>Description</label>
//         <Textarea className="h-40" 
//         defaultValue={Chapters[index].about}
//         onChange={(event)=>setAbout(event?.target.value)}/>
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

// export default EditChapters