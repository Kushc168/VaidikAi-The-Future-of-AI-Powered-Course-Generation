require('dotenv').config();

console.log("Database URL:", process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);

/** @type { import {"drizzle-kit"}.Config } */
export default {
  dialect: "postgresql",  
  schema: "./configs/schema.jsx",
  dbCredentials: {
    url: "postgresql://AI-Course-Generator_owner:eI5l1pAmOHzx@ep-aged-dew-a5e5uhjt.us-east-2.aws.neon.tech/AI-Course-Generator?sslmode=require",
  }
};
