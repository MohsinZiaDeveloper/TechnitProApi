const express = require("express");
const app = express();

app.use(express.json());
const blogRouter = require("./Routes/BlogRoute");
// const userRouter = require('./routes/userRoutes');
app.use("/api/v1/blogs", blogRouter);
// app.use('/api/v1/users', userRouter);
module.exports = app;
