import mongoose from 'mongoose';
const baseUrl = process.env.MONGODB || '0.0.0.0:27017';
export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/book`);
        
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
       }
}