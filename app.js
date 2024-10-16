const express = require("express")
const app = express()

const HOST = "127.0.0.1"
const PORT = 4000

/* 
    Middleware
    * function or method
    * gives us access to the request and response objects
    * gives us access to the next middleware fx in the stack
*/

app.use(express.json())
app.use(logTime)

function logTime(req, res, next) {
    let date = new Date()
    console.log(date.toLocaleDateString())
    
    next()
}

app.get("/:pokemon", (req, res) => {
    const { pokemon } = req.params

    if (pokemon === "pikachu") {
        res.status(200).json({
            skill: "lightning"
        })
    } else if (pokemon === "bulbasaur") {
        res.status(200).json({
            skill: "wet"
        })
    }
})

app.get("/", (req, res) => {
    res.send("Hello from our server")
})

app.post("/", (req, res) => {
    console.log(req.body)

    res.status(200).json({
        message: "You hit our POST endpoint"
    })
})

// Endpoint: Endpoint: 127.0.0.1:4000/myname/paul
app.get("/myname/:firstName", (req, res) => {
    console.log(req.params)
    console.log(req.params.firstName)
    const { firstName } = req.params
    console.log(firstName)
})

// Endpoint: 127.0.0.1:4000/queryparams/?username=paul123&password=password123
app.get("/queryparams/", (req, res) => {
    console.log(req.query)
})

app.listen(PORT, HOST, () => {
    console.log(`[server] listening on ${HOST}:${PORT}`)
})