// import packages
const express = require('express');
const session = require('express-session');
const MySQLStore = require('connect-mysql2')(session);
const path = require('path')

require('dotenv').config();

// const db = require('./config/db')
const authRoutes = require('./routes/auth')


// initialise server
const app = express();

// set-up middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// set-up session
app.use(session({
    key: 'user_sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // store: new MySQLStore({}, db)
}))


// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/auth', authRoutes);

// start server
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

