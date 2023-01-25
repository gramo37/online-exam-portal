const express = require("express");
const { createOrder } = require("../controllers/orderController");

const app = express.Router()

app.route('/createOrder').post(createOrder)


module.exports = app