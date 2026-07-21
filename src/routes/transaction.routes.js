const {Router} = require('express');
const authMiddlewares = require("../middleware/auth.middleware.js");
const transactionController = require("../controllers/transaction.controller.js");

const transactionRoutes = Router();



transactionRoutes.post("/",authMiddlewares.authMiddleware,transactionController.createTransaction )
transactionRoutes.post("/system/initial-funds", authMiddlewares.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)


module.exports = transactionRoutes