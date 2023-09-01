require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser()); // import the CORS middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
// app.use(cors(
//   {
//     origin: ["*"],
//     methods: ["POST", "GET"],
//     credentials: true
//   }
// ))

// // // Cors for all frontEnds
app.use(cors())

// app.get("https://hosting-repo.vercel.app/load", (req, res) => {
//   res.send("hello")
// })


//I changed here for Git check
// const controller = require("./controller/controller");
// const Middleware = require("./middleware/midW");
//route handler⤵️ 




// -----------------------------
// // For checking only 

// app.use("/", (req, res) => {
//   res.send("Hello Ak")
// })



// // // create router and check now

const routes = require("./routes/routes")

app.use( "/" , routes)



// //----------------------------------------------------
// app.post("/register", controller.createUser1);
// app.post("/login", Middleware.authJWT, controller.getUser);
// app.get("/about", Middleware.authenticate, controller.requestSender);
// // app.get("/fetchName",controller.getUserbyQuery)
// // app.get("/companyAccess", controller.getCompany  )
// // --------------------------------------------------
// //  


mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB).then(() => {
  console.log("Mongo Connected");
}).catch((err) => {
  console.log("Not connected, try later");
})



//
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}..`);
});
module.exports = app;
