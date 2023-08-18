import mongoose from "mongoose";

const connection = {};

export default async function connect() {
    if (connection.isConnected) {
        return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = conn.connections[0].readyState;
}