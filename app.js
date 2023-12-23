const express = require("express");
const app = express();
const products = require("./routes/product");
const auth = require("./routes/auth");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const cors = reqiure("cors");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://dinesh-react-login-front.vercel.app",
  })
);

app.use("/api/v1/", products);
app.use("/api/v1/", auth);

app.use(errorMiddleware);

module.exports = app;
