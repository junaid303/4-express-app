//Rather importing all the router files in app.js, better create one index.js file and import it here

import userRouter from "./userRouter.js";
import adminRouter from "./adminRouter.js";
import deliveryAgentRouter from "./deliveryAgentRouter.js";
import restaurantRouter from "./restaurantRouter.js";


export {
    userRouter, adminRouter, deliveryAgentRouter, restaurantRouter
}

