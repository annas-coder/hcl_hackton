import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const db_connection = async () => mongoose.connect(process.env.MONGO_URL); 