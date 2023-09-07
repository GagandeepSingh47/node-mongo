const express = require('express');
const { dbConnect } = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());

const userRoutes = require('./routes/User.routes');
app.get('/', function (req, res) {
    res.status(200).json({ data: 'here' })
});

app.use('/users', userRoutes);

//db connect
dbConnect.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnect.once('open', () => {
    console.log('Connected to MongoDB');
});
app.listen(4500, function () {
    console.log('app list port' + 4500);
})



