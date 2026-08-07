import dotenv from 'dotenv';
dotenv.config();

if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}
const config = {
    port: process.env.PORT || 3000,
    authServiceUrl: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
    chatServiceUrl: process.env.CHAT_SERVICE_URL || 'http://localhost:3002',
    agentServiceUrl: process.env.AGENT_SERVICE_URL || 'http://localhost:3003',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
    jwtSecret: process.env.JWT_SECRET
};

export default config;