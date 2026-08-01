import config from "./src/config/config.js";
import app from "./src/app.js";

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`);
});