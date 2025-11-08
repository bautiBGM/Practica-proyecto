import express from "express"
// import router from "./routes/router.js"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use("/app",router)

app.use((req,res) => {
    res.status(400).send('something broke!')
})

export default app

