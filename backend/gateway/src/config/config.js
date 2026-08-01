import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    authServiceUrl: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
};

export default config;