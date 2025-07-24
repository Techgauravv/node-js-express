let fs = require("fs");

// fs.writeFile('mycode.txt','We are using express',(err)=>{
//     if(err) throw err;
//     console.log('Task Done')
// })

// File ke end mein data add karta hai
// fs.appendFile("myText.txt", "Code from Node FS \n", (err) => {
//   if (err) throw err;
//   console.log("File appended");
// });

//File ko asynchronously read karta hai
// first method
// fs.readFile("city.json", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fs.readFile("myText.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // second method
// let data = fs.readFileSync("city.json", { encoding: "utf-8", flag: "r" });
// console.log(data);

// let data1 = fs.readFileSync("myText.txt", { encoding: "utf-8", flag: "r" });
// console.log(data1);

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("uploadComplete", (filename) => {
//   console.log(`✅ File "${filename}" uploaded successfully!`);
// });

// fs.writeFile("demo.txt", "This is file data.", (err) => {
//   if (!err) {
//     emitter.emit("uploadComplete", "demo.txt");
//   }
// });

// fs.unlink("demo.txt", (err) => {
//   if (err) throw err;
//   console.log("file deleted");
// });

fs.rename("oldcode.txt", "myCode.yml", (error) => {
  if (error) throw error;
  console.log("rename successfully");
});
