import express from "express";
const app = express();

const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("<h1> I am a Day 0 to ExpressJS. I am committed to stay here for long time...");
});

app.get("/junaid",(req,res)=>{
    res.send("<h1> Dont forget to deploy your mvc app");
});

app.post("/junaid",(req, res)=>{
    res.send("<h1> Dont forget to order a pizza to everyone");
});

app.listen(port, () =>{
    console.log(`Server has Started at ${port}`);
});
