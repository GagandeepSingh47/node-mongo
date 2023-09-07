const mongoose = require('mongoose')

// async function dbConnect() {
//     try {
// await mongoose.connect('mongodb://localhost:27017/testDB');
// console.log('connected');
//     } catch (error) {
//         console.log(error);
//     }
// }
mongoose.connect('mongodb://localhost:27017/testDB');
console.log('connected');

const dbConnect = mongoose.connection;


module.exports = { dbConnect }