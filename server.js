const express = require('express');
require('dotenv').config()
const db = require('./db');
const cookieParser = require('cookie-parser');
const checkUser = require('./middleware/authMiddleWare')


//routers
const pageRoute =  require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');
const gonderiRoute = require('./routes/gonderiRoute')

db();

const app = express();
const port = process.env.PORT || 3001

//ejs view engine
app.set('view engine', 'ejs')

//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

//routes
app.get('*', checkUser.checkUser)
app.use('/', pageRoute);
app.use('/blog', gonderiRoute)
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`${port} is active`)
})