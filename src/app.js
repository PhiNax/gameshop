// Call express module
const express = require('express');
// Call path module
const path = require('path');
// Call express session module
const session = require('express-session');
// Call Morgan module logger middleware
const morgan = require('morgan');

// Call dotenv module to protect environment variables   
require('dotenv').config()
// Connect to DB
require('./database/connectDB');

// Call routes
const mainRouter = require('./routes/mainRoutes');
const productsRouter = require('./routes/productsRoutes');
const usersRouter = require('./routes/usersRoutes');
const adminRouter = require('./routes/adminRoutes');
// Call API routes
const apiRouter = require('./routes/apiRoutes');

// Call override method
const methodOverride = require('method-override');

// Build a express app
const app = express();

// Create PORT variable with process.env
const PORT = process.env.PORT;

// Set public folder
const staticFolder = path.resolve(__dirname, './public');

// Set View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set app to use public folder
app.use(express.static(staticFolder));

// Set up Morgan middleware
app.use(morgan('dev'));

// Set app to use encoded
app.use(express.urlencoded({ extended: false }));

// Set app to use json pharse
app.use(express.json());

// Set app to override method on form
app.use(methodOverride('_method')); // method="POST" on form to use PUT y DELETE

// Set app to use express session
app.use(session({
    secret: 'A la grande le puse cuca',
    name: 'areshop-sid',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
}));

// Main Routes
app.use('/', mainRouter);
// Users Routers
app.use('/user', usersRouter);
// Products Routers for users
app.use('/products', productsRouter);
// Products Routers for Admins
app.use('/admin', adminRouter);
// API Routes
app.use('/api', apiRouter);
// 404 Routes
app.use((req, res, next) => {
    res.status(404).render('404-not-found');
});
// Config listening port
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
