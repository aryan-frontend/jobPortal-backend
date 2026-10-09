import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user.routes.js"
import companyRoute from "./routes/company.routes.js";

dotenv.config({});
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173', 'https://job-portal-frontend-ib6o.vercel.app/'],
    credentials : true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT ||  3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);

app.listen(PORT , () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})