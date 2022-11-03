 
import mongoose from "mongoose";
import vars from '../../../configs/database.config.js'
// INFO: connect to mongodb server using mongoose
async function InitiateMongoServer() {
  try {
    await mongoose.connect(vars.mongodb.host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (error) {
    console.log('Database error:', error);
    // throw error;
  }
}

export default InitiateMongoServer;