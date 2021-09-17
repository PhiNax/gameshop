const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render('index')
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        // Do the magic
    },

    // Create - Form to create
    create: (req, res) => {
        // Do the magic
    },

    // Create -  Method to store
    store: (req, res) => {
        // Do the magic
    },

    // Update - Form to edit
    edit: (req, res) => {
        // Do the magic
    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Do the magic
    }
};

module.exports = controller;