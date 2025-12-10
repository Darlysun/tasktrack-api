require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
