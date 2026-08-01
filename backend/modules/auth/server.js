import config from "./src/config/config.js";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

connectDB();

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Auth module is running on port ${PORT}`);
});