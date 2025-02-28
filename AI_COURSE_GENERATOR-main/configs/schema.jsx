import { json,pgTable,serial,varchar,integer } from "drizzle-orm/pg-core";


export const CourseList=pgTable('courseList',{
     id:serial('id').primaryKey(),
     courseId:varchar('courseId').notNull(),
     name:varchar('name').notNull(),
     category:varchar('category').notNull(),
     level:varchar('level').notNull(),
     includeVideo:varchar('includeVideo').notNull().default('Yes'),
     courseOutput:json('courseOutput').notNull(),
     createdBy:varchar('createdBy'),
     userName:varchar('username'),
     userProfileImage:varchar('userProfileImage'),    
}) 



export const Chapters = pgTable('chapters', {
     id:serial('id').primaryKey(),
     courseId:varchar('courseId').notNull(), // Corrected the semicolon to a colon
     chapterId:integer('chapterId').notNull(),
     content:json('content').notNull(),
     videoId:varchar('videoId'),
 });
 