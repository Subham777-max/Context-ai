import app from "./src/app.js";
import config from "./src/configs/config.js";
import connectDB from "./src/configs/db.js";

const PORT = config.port || 3002;

connectDB();

app.listen(PORT, () => {
  console.log(`Chat module is running on port ${PORT}`);
});