import User from "../models/user.model.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({
            username,
            email,
            password,
        });
        const userSaved = await newUser.save();
        res.send("Registered");
    } catch (error) {
        console.error(error);
    }
};

export const login = async (req, res) => res.send("Login route");
