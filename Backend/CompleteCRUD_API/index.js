// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const app = express();
// // This is the body parser(with this we can take input from body)
// var bodyParser = require("body-parser");
// app.use(bodyParser.json());

// // import/use for file upload
// const fileUpload = require("express-fileupload");
// app.use(fileUpload());

// const url = "mongodb://localhost/MyDatabase";

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const con = mongoose.connection;

// con.on("open", function () {
//   console.log("Database connected...");
// });
// app.use(express.static(path.join(__dirname, "")));
// const routePath = require("./Router/RouterPage");
// console.log("Hello This Code run");
// app.use("/task-5", routePath);
// app.listen(3003);

//------------------------------------Task-6 Cnnect API with react js---------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
// This is the body parser(with this we can take input from body)
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// import/use for file upload
const fileUpload = require("express-fileupload");
app.use(fileUpload());

const url = "mongodb://localhost/MyDatabase";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("Database connected...");
});
app.use(express.static(path.join(__dirname, "")));
const routePath = require("./Router/RouterPage");
console.log("Hello This Code run");
app.use("/task-6", routePath);
app.listen(3003);
