import express from "express";

import connectDB from "./db/db.js";

import usersRouter from "./routes/api/users.js";
import postsRouter from "./routes/api/posts.js";
import profileRouter from "./routes/api/profile.js";
import authRouter from "./routes/api/auth.js";

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
