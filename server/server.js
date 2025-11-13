require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes/index");
const mediaRoutes = require("./routes/instructor-routes/media-routes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGO_URL;

cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
app.use(cors());
app.use(express.json());

//database connection
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//routes configuration
app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);

//global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
