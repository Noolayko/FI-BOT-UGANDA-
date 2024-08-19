  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"𝐅𝚰 𝚩𝚯𝚻 𝐔𝐆"},
    creator: { type: String, default: "𝐅𝚰 𝚩𝚯𝚻 𝐔𝐆" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
