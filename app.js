import express from "express";
const app = express();

const port = process.env.PORT || 8080;
//Import Routers

import {
    userRouter, adminRouter, deliveryAgentRouter, restaurantRouter
} from "./routes/index.js";


//Root Page
app.get("/", (req, res) => {
    res.send("We are on limited TIME. Time is leaking...");
});

app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/agent", deliveryAgentRouter);
app.use("/restaurant", restaurantRouter);


app.listen(port, () => {
    console.log(`Server started at ${port}`);
});