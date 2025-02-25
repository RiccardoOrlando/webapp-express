const express = require("express")
const router = express.Router()
const bookController = require("../controllers/bookController")


// Lista  delle rotte con la funzione corrispondente del controller
//INDEX
router.get("/", bookController.index)
//CREATE
router.get("/:id", bookController.show)
//DELETE    
router.delete("/:id", bookController.destroy)

module.exports = router