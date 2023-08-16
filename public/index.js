const express = require('express')
const cors = require('cors')
const User = require('../config')
const app = express();
app.use(express.json());
app.use(cors());

app.get("/setUser", async(req,res)=>{
    const data = req.body;
    console.log(data);
    // await User.add(data);
    res.send("User added succesfully");
})

app.listen(3000,()=>{
    console.log("server running at 4000")
} )