const express = require('express')
const app = express()
const port = process.env.port
const cors = require("cors")

// Routes
const booksRouter = require("./routers/booksRouter")

// CORS che permette la comunicazione con il front-end
app.use(cors({
  origin: "http://localhost:3000"
}))
// Middlewares
app.use(express.static('public'))
// Parsing del req.body
app.use(express.json())
//Rotte
app.use("/books", booksRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})