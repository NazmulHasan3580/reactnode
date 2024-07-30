const express = require("express");
const cors = require("cors");
const user = require("./db/user");
require("./db/config");
const app = express();

app.use(cors());

app.use(express.json());
app.post("/register", async (req, res) => {
  let data = new user(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let data = await user.findOne(req.body).select("-password");
    if (data) {
      res.send(data);
    } else {
      res.send({ result: "No User Found" });
    }
  }else{
    res.send({ result: "No User Found" });
  }
});

app.listen(5000);

// const connectDB = async()=>{
//     mongoose.connect("mongodb+srv://n47712338:7j8FfaD9T3d3HDro@cluster0.sxnh2fa.mongodb.net/reactnode?retryWrites=true&w=majority&appName=Cluster0")
//     const userSchema = new mongoose.Schema({})
//     const user = mongoose.model('users',userSchema)
//     const data = await user.find()
//     console.log(data);

// }
// connectDB()
