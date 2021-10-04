// Call express module
const express = require('express');
// Conect to DataBase
require('./database/mongodb');
// Call path module
const path = require('path');
// Call routes
const mainRouter = require('./routes/mainRoutes');
const productsRouter = require('./routes/productsRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');
// Call override method
const methodOverride = require('method-override');

// Build a express app
const app = express();

// Create PORT variable with process.env
const PORT = process.env.PORT || 3000;

// Set public folder
const staticFolder = path.resolve(__dirname, './public');

// Set app to use public folder
app.use(express.static(staticFolder));

// Set app to use encoded
app.use(express.urlencoded({ extended: false }));

// Set app to use json pharse
app.use(express.json());

// Set app to override method on form
app.use(methodOverride('_method')); // method="POST" on form to use PUT y DELETE

// Set View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Use Routes
// Main Routes
app.use('/', mainRouter);
// Admin Dashboard
app.use('/dashboard', dashboardRouter);
// Products Routes for Admins
app.use('/products', productsRouter);

// 404 Routes
app.use((req, res, next) => {
    res.status(404).render('404-not-found');
    next();
});

// Config listening port
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});