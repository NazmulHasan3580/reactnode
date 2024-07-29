const express = require('express')
const user = require('./db/user')
require('./db/config')
const app = express()

app.use(express.json())
app.post('/register', async(req, res)=>{
    let data = new user(req.body)
    const result =await data.save()
    res.send(result)
})

app.listen(5000)








// const connectDB = async()=>{
//     mongoose.connect("mongodb+srv://n47712338:7j8FfaD9T3d3HDro@cluster0.sxnh2fa.mongodb.net/reactnode?retryWrites=true&w=majority&appName=Cluster0")
//     const userSchema = new mongoose.Schema({})
//     const user = mongoose.model('users',userSchema)
//     const data = await user.find()
//     console.log(data);

// }
// connectDB()