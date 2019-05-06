const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

app.get("/", (req, res) => res.send("Peau API running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
// host the server on local port 5000

app.listen(PORT, () => console.log(`Peau server started on port ${PORT}`));
