import express from "express";
const app = express();

const port = process.env.PORT || 8080;
//Import Routers
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";

app.user("/users", userRouter);//This /users is mounted to userRouter and userRouter has its routers in its file
app.user("/admin", adminRouter);//This /admin is mounted to adminRouter and adminRouter has its routers in its file

app.listen(port, () =>{
    console.log(`Server has Started at ${port}`);
});
