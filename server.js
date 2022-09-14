const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const {errorHandller} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

connectDB()

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandller)

app.listen(port, () => console.log(`server started on port  ${port}`));
