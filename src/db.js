import mongoose from "mongoose";

export const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://jesabogal01:KKSv2hnUNIDl7Y8z@cluster0.scpk0nl.mongodb.net/");
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }
};
