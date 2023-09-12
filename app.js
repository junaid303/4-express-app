import express from "express";
const app = express();

const port = process.env.PORT || 8080;
//Import Routers
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";

app.get("/", (req, res)=>{
    res.send("We are on limited TIME. Time is leaking....");
});

app.use("/users", userRouter);//This /users is mounted to userRouter and userRouter has its routers in its file
app.use("/admin", adminRouter);//This /admin is mounted to adminRouter and adminRouter has its routers in its file

app.listen(port, () =>{
    console.log(`Server has Started at ${port}`);
});
