import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import config from "../config/config.js";

const signToken = (user) => {
	return jwt.sign(
		{ _id: user._id, email: user.email },
		config.jwtSecret,
		{ expiresIn: "7d" }
	);
};

const sanitizeUser = (user) => {
	const obj = user.toObject ? user.toObject() : user;
	delete obj.password;
	return obj;
};

export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({ message: "Email already in use" });
		}

		const user = await User.create({
			name,
			email,
			password,
		});

		const token = signToken(user);

        res.cookie("token", token);

		return res.status(201).json({
			message: "Registered successfully",
			user: sanitizeUser(user),
		});
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;


		const user = await User.findOne({ email }).select("+password");
		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isPasswordValid = await user.comparePassword(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = signToken(user);

        res.cookie("token", token);

		return res.status(200).json({
			message: "Logged in successfully",
			user: sanitizeUser(user),
		});
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
};

