
const router = require("express").Router()


//I changed here for Git check
const controller = require("../controller/controller");
const Middleware = require("../middleware/midW");

// // // For checking only -------->

router.get("/" , (req , res)=>{
  res.send("Check now on / path")
})


router.get("/c" , (req , res)=>{
  res.send("Check now")
})



//----------------------------------------------------
router.post("/register", controller.createUser1);
router.post("/login", Middleware.authJWT, controller.getUser);
router.get("/about", Middleware.authenticate, controller.requestSender);
// app.get("/fetchName",controller.getUserbyQuery)
// app.get("/companyAccess", controller.getCompany  )
// --------------------------------------------------
//  


module.exports = router