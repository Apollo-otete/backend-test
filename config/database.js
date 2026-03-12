const mongoose = require ("mongoose")
const connectDb =async()=>{
  try {
    await mongoose.connect("mongodb+srv://apollos:bagy9541@cluster0.bpidegm.mongodb.net/?appName=Cluster0",{})
    console.log("data connected succesfully")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDb;
