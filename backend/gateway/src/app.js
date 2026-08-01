import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import proxy from "express-http-proxy";
import config from "./config/config.js";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors({
  origin: config.frontendUrl,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use("/api/auth",proxy(config.authServiceUrl));


app.get("/", (req, res) => {
  res.send("Gateway is running");
});

export default app;