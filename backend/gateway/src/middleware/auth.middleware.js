import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import redis from '../../../shared/redis/redis.js';
export const protect = async (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.status(401).json({ message: "Not authorized" });
	}

	try {
		const decoded = jwt.verify(token, config.jwtSecret);
		const user = await redis.get(`token-${token}`);
		if (!user) {
			return res.status(401).json({ message: "Not authorized" });
		}
		req.user = JSON.parse(user);
		next();
	} catch (error) {
		return res.status(401).json({ message: "Not authorized" });
	}
};