import express from "express";
import router from "./routes/router";
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

const header = {
  1: "Access-Control-Allow-Origin",
  2: "*",
  3: "Access-Control-Allow-Headers",
  4: "Origin, X-Requested-With, Content-Type, Accept",
};

app.use(function (req, res, next) {
  res.header(header[1], header[2]);
  res.header(header[3], header[4]);
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

app.use("/app", router);

app.listen(port, () => {
  console.log(`Local:            http://localhost:${port}`);
  console.log(`Server is running on port ${port}`);
});
