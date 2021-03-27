// // const express = require("express");
// // const rt = express.Router();

// // const empData = require("../Model/EmpData"); // variable empData may same or may not

// // // Data insert into employee schema
// // rt.post("/insert", async (req, res) => {
// //   try {
// //     // file uploadcode
// //     //let img = req.files.image;
// //     const file = req.files.image;
// //     file.mv("./imgUpload/" + file.name);
// //     let path = "./imgUpload/" + file.name;

// //     const dataSet = new empData({
// //       adharNumber: req.body.adharNumber,
// //       name: req.body.name,
// //       age: req.body.age,
// //       mobileNumber: req.body.mobileNumber,
// //       gender: req.body.gender,
// //       city: req.body.city,
// //       image: path,
// //     });
// //     const fetchData = await empData.findOne({
// //       adharNumber: req.body.adharNumber,
// //     });
// //     if (fetchData) {
// //       console.log(fetchData);
// //       res.send("Please do not insert duplicate data");
// //     } else {
// //       console.log(dataSet);
// //       res.send(dataSet);
// //       dataSet.save();
// //     }
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });

// // // // File upload check--correct code
// // // rt.post("/upload", async (req, res) => {
// // //   try {
// // //     const file = req.files.image;
// // //     console.log(file.name);
// // //     file.mv("./imgUpload/" + file.name);
// // //     let path = "./imgUpload/" + file.name;
// // //     console.log("Image path to be upload in database", path);
// // //   } catch (error) {
// // //     console.log(error);
// // //   }
// // // });

// // // File upload with validation
// // rt.post("/uploadCheck", async (req, res) => {
// //   try {
// //     const file = req.files.image;
// //     console.log(file.name);
// //     file.mv("./imgUpload/" + file.name);
// //     let path = "./imgUpload/" + file.name;
// //     console.log("Image path to be upload in database", path);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });

// // // get all data from employee schema
// // rt.get("/select", async (req, res) => {
// //   try {
// //     const fetchData = await empData.find();
// //     console.log(fetchData);
// //     res.send(fetchData);
// //   } catch (error) {
// //     console.log(error);
// //     res.send(error);
// //   }
// // });

// // // get single and specific data from employee schema
// // rt.get("/select/:id", async (req, res) => {
// //   try {
// //     const fetchData = await empData.findById(req.params.id);
// //     console.log(fetchData);
// //     res.send(fetchData);
// //   } catch (error) {
// //     console.log(error);
// //     res.send(error);
// //   }
// // });

// // // get sigle specific field
// // rt.get("/select/:id", async (req, res) => {
// //   try {
// //     const fetchData = await empData.findOne({
// //       adharNumber: req.body.adharNumber,
// //     });
// //     console.log(fetchData);
// //     res.send(fetchData);
// //   } catch (error) {
// //     console.log(error);
// //     res.send(error);
// //   }
// // });
// // module.exports = rt; // if i forgot this line then error come "method require middleware....."

// //--------------------------Tast-5 file upload with validation---------------------------------
// //---------------------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------------------

// const express = require("express");
// const rt = express.Router();
// const path = require("path");

// const uploadData = require("../Model/FileUploadSchema");

// rt.get("/select", async (req, res) => {
//   //res.send("you got the response");
//   const p = new Date();
//   const dt = p.getDate;
//   const tm = p.getTime;
//   res.send(p);
// });

// rt.post("/imgUpload", async (req, res) => {
//   try {
//     // for checking the record exist or not
//     const em = await uploadData.findOne({ email: req.body.email });
//     if (em === null) {
//       // console.log("recored not exixt");
//       // console.log("+++++++++++++++++++++", em);
//       const file = req.files.image;
//       //------finding size of the image
//       const sz = file.size;
//       console.log(sz);
//       if (sz <= 2097152) {
//         //------------checking type of file
//         const type = file.mimetype;
//         if (type === "image/jpeg" || type === "image/png") {
//           var imgName = +new Date() + file.name;
//           const savePath = path.join(__dirname, "./img/", file.name);
//           file.mv("./img/" + imgName);

//           // adding into database
//           const dataSet = new uploadData({
//             email: req.body.email,
//             name: req.body.name,
//             photo: "./img/" + imgName,
//           });
//           await dataSet.save();
//           // res.send(dataSet);

//           res.send("This image inserted ---" + dataSet);
//         } else {
//           res.send("please send only jpeg image type");
//         }
//       } else {
//         res.send("please upload less than equals to 2 MB Image");
//       }
//     } else {
//       console.log("record exixt");
//       res.send("Record already exist !! Please don not insert duplicate data ");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = rt;

//-----------------------------------------Task-6 connect APi with react JS-------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

const express = require("express");
const rt = express.Router();
const path = require("path");
const studentData = require("../Model/studentData");

const uploadData = require("../Model/studentData");

rt.post("/insert", async (req, res) => {
  try {
    // for checking the record exist or not
    const em = await uploadData.findOne({ adharNumber: req.body.adharNumber });
    if (em === null) {
      // taking image for validations
      const file = req.files.image;
      //------finding size of the image
      const sz = file.size;
      console.log(sz);
      if (sz <= 2097152) {
        //------------checking type of file
        const type = file.mimetype;
        if (
          type === "image/jpeg" ||
          type === "image/png" ||
          type === "image/jpg"
        ) {
          var imgName = +new Date() + file.name;
          const savePath = path.join(__dirname, "./img/", file.name);
          file.mv("./studentIMG/" + imgName);

          // adding into database
          const dataSet = new uploadData({
            adharNumber: req.body.adharNumber,
            name: req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            school: req.body.school,
            image: "./studentIMG/" + imgName,
          });
          await dataSet.save();
          res.send("This recored inserted ---" + dataSet);
          console.log("This record inserted ---" + dataSet);
        } else {
          res.send("please send only jpeg image type");
        }
      } else {
        res.send("please upload less than equals to 2 MB Image");
      }
    } else {
      console.log("record exixt");
      res.send("Record already exist !! Please don not insert duplicate data ");
    }
  } catch (error) {
    console.log(error);
  }
});

//select all data from student Schema
rt.get("/selectAll", async (req, res) => {
  const dt = await studentData.find();
  res.send(dt);
});

// select Specifict data from data base on the basis of adharNumber
rt.post("/selectOne", async (req, res) => {
  const dt = await studentData.findOne({ adharNumber: req.body.adharNumber });
  res.send(dt);
});

// Update data specific Data
rt.post("/update", async (req, res) => {
  const dt = await studentData.findOne({ adharNumber: req.body.adharNumber });
  if (dt) {
    await studentData.updateOne(
      { adharNumber: req.body.adharNumber },
      { name: req.body.name }
    );
  } else {
    res.send("This adharNumber does not exist");
  }
});

//Delete Specidic Data
rt.post("/delete", async (req, res) => {
  const dt = await studentData.findOne({ adharNumber: req.body.adharNumber });
  if (dt) {
    await studentData.deleteOne({ adharNumber: req.body.adharNumber });
    res.send("This record Deleted.");
  } else {
    res.send("This adharNumber does not exist");
  }
});

module.exports = rt;
