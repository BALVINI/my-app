import mongoose from "mongoose";
import { cache } from "react";

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL) {
    throw new Error("Please define the MONGODB_URL enviroment variable inside .env.local");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}