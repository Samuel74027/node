// First method
// const test = require("./test");
// console.log(test.highSchool);
// console.log(test.names[1]);
// console.log(test);

// Second method(preferred)
// const { highSchool, names } = require("./test");
// console.log(highSchool);
// console.log(names);

// // readFile
const fs = require("fs");
// fs.readFile("./hello.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });

// // Overwrite and create new files
// fs.writeFile("./docs/hello.txt", "New Content HERE", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data is updated");
//   }
// });

// fs.writeFile("./docs/hello2.txt", "This is a new file", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("New File is added");
//   }
// });

// // make a new directory(folder)
// if (fs.existsSync("./new")) {
//   fs.rmdir("./new", () => {
//     console.log("Directory deleted");
//   });
// } else {
//   fs.mkdir("./new", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Directory created");
//     }
//   });
// }

// //delete file
// if (fs.existsSync("./docs/hello2.txt")) {
//   fs.unlink("./docs/hello2.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File deleted");
//     }
//   });
// }

// stram data file
const readStream = fs.createReadStream("./dummyText/dummy1.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./dummyText/dummy2.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
