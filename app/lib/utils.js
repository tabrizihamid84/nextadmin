import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://hamid:mQOuFISJtGz5q60s@cluster0.xujq1f8.mongodb.net/dashboard?retryWrites=true&w=majority"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
