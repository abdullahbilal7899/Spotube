import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import songRouter from './src/routes/songRoute.js'
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import albumRouter from './src/routes/albumRoute.js'

const app= express()


connectDB();
connectCloudinary();




app.use(express.json())
app.use(cors())


app.use('/api/song',songRouter)
app.use('/api/album',albumRouter)





const port = 4009;

    app.listen(port, ()=>{console.log("server started at " + port)});
