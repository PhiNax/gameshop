// Call express module
const express = require('express');
// Call dotenv module
require('dotenv').config();
// Connect to DB
require('./database/connectDB');
// Call path module
const path = require('path');
// Call Session module
const session = require('express-session');
// Call Middleware to check if user is logged in
const userLoggedMiddlevare = require('./middleware/userLoggedMiddlevare');

// Call routes
const mainRouter = require('./routes/mainRoutes');
const usersRouter = require('./routes/usersRoutes');
const gamesRouter = require('./routes/gamesRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');

// Call override method
const methodOverride = require('method-override');

// Create PORT variable with process.env
const PORT = process.env.PORT;
// Set public folder
const staticFolder = path.resolve(__dirname, './public');
// Build a express app
const app = express();
// Config listening port
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

// Set View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set app to use public folder
app.use(express.static(staticFolder));
// Set app to use encoded
app.use(express.urlencoded({ extended: false }));
// Set app to use json pharse
app.use(express.json());
// Set app to override method on form
app.use(methodOverride('_method')); // ?_method on form to use PUT y DELETE
// Set app to use session storage
app.use(session({
    secret: 'cat on the roof',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
// Global middleware to check if user is logged in
app.use(userLoggedMiddlevare);

// Use Routes
// Main Routes
app.use('/', mainRouter);
// User Routes
app.use('/user', usersRouter);
// Products Routes
app.use('/games', gamesRouter);
// Admin Dashboard Routes
app.use('/dashboard', dashboardRouter);
// 404 Routes
app.use((req, res, next) => {
    res.status(404).render('404-not-found');
    next();
});