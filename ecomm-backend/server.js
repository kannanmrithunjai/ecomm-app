const cors = require("cors"); //imports CORS
const express = require("express"); //imports Express Library
const env = require("dotenv").config(); //imports environment file
const app = express();

const router = require("./router");

//applying CORS policy
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: "*",
  })
);

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT:${PORT}`);
});
