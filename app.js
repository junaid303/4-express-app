import express from "express";
const app = express();

const port = process.env.PORT || 8080;
//Import Routers

import {
    userRouter, adminRouter, deliveryAgentRouter, restaurantRouter
} from "./routes/index.js";
import { nextTick } from "process";


//Root Page
app.get("/", (req, res) => {
    res.send("We are on limited TIME. Time is leaking...");
});

app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/agent", deliveryAgentRouter);
app.use("/restaurant", restaurantRouter);

//next()middleware

var a = (req, res, next)=>{
    try {
        console.log("First");
        res.send("Good Morning");
        next();
    } catch (error) {
        console.log("I am not an egghead from 6AM-8AM");
        //console.log("Something went wrong");
    }
}
var b = function(req, res, next){
    console.log("Second");
    next();
}
var c = function(req, res, next) {
    console.log("I am Junaid, I log everytime...");
}
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});