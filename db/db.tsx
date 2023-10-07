import mongoose from "mongoose";

const connectdb = async () => {
 
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("connect sucessfully..");
  } catch (error) {
    console.log(error);
    mongoose.disconnect()
  }
};

export default connectdb;
