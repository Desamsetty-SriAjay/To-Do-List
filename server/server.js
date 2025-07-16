import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectDB.js";
import router from "./routes/todoRoutes.js";
dotenv.config();


const app=express();
const PORT=process.env.PORT || 5000
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("Api is running")
})

app.listen(PORT,()=>{console.log(`server is running at PORT ${PORT}`)});
