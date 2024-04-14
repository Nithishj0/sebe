import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://nithish98:nithish@15980@cluster0.gt1lhhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${connection.connection.host}`);
    mongoose.set('strictQuery', true); // Disable strictQuery to suppress the deprecation warning
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
