import express from "express";
import router from "./routes/router";
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
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

app.use("/app", router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`Server is running on port ${port}`);
});
