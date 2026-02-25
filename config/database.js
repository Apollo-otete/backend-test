const mongoose = require ("mongoose")
const connectDb =async()=>{
  try {
    await mongoose.connect("mongodb+srv://apollo7brian_db_user:fXGxDSQ13qJcjiRD@cluster0.zsfpsep.mongodb.net/?appName=Cluster0",{})
    console.log("data connected succesfully")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDb;
