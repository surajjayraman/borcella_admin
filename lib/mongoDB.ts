import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    if (isConnected) {
        return;
    }
    
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    
    isConnected = db.connections[0].readyState;
}
    
export default connectToDB;