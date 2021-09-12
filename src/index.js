require("dotenv").config();

const express = require("express");

const { connectDB } = require("./db/db");

const usersRouter = require("./routes/api/users");
const postsRouter = require("./routes/api/posts");
const profileRouter = require("./routes/api/profile");
const authRouter = require("./routes/api/auth");

const app = express();

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/profile", profileRouter);
app.use("/api/auth", authRouter);

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
