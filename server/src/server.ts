import express, { Application } from "express";
import router from "./routes/router";
import mongoose from "mongoose";

const cors = require("cors");
const bodyParser = require("body-parser");
const app: Application = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.protocol}/ ${req.method}: ${req.url}`);
  next();
});

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/app", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`Server is running on port ${port}`);
});
