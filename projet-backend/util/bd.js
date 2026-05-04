import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;
        
    let uri = process.env.MONGODB_URI || "mongodb://localhost:27017/woofontrency";

    try {
        await mongoose.connect(uri);
        isConnected = true;
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}