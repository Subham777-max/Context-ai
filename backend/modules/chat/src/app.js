import express from "express";
import morgan from "morgan";
import chatRoutes from "./routes/chat.routes.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", chatRoutes);
export default app;