const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

const connectDB = async()=>{
    mongoose.connect("mongodb+srv://n47712338:7j8FfaD9T3d3HDro@cluster0.sxnh2fa.mongodb.net/reactnode?retryWrites=true&w=majority&appName=Cluster0")
    const userSchema = new mongoose.Schema({})
    const user = mongoose.model('users',userSchema)
    const data = await user.find()
    console.log(data);

}
connectDB()


app.listen(5000)