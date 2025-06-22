import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { db_connection } from "./config/db.js";
import authRoute from "./routes/authRoutes.js"
import userRoute from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorHandler/index.js";

config(); //configuration access env file

const PORT = process.env.PORT || 5000 //running port 

const app = express();

app.use(cors());
app.use(express.json()); // handles JSON bodies
app.use(express.urlencoded({ extended: true })); // handles form data

// Global error Handler
app.use(errorHandler)

// group router
app.use("/api/auth", authRoute); 
app.use("/api/user", userRoute); 


//db connection
db_connection()
.then(()=>console.log("connected successfully"))
.catch((error)=>console.log(error))

app.listen(PORT, () => {
  console.log(`project successfully running url : http:localhost:${PORT}`); //app listener
});
