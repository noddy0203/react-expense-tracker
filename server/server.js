const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const connectDB  = require("./config/db")


dotenv.config({ path: "./config/config.env" });
connectDB()


const transactions = require("./router/transactions");

app.use(express.json())

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}
app.use("/api/v1/transactions", transactions);

app.get("/", (req, res) => {
  res.send("hii this is home page for expense tracker");
});

app.listen(PORT, function () {
  console.log(
    `server listenning on ${process.env.NODE_ENV} mode at port number ${PORT}`
      .yellow.bold
  );
});
