import React, { useEffect, useState } from "react";
import loginAPI from "../service/login";
import { Button, TextField } from "@mui/material";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const btnClicked = async () => {
    const response = await loginAPI(userName, password);
    console.log(response);
  };

  return (
    <div className="container-fluid">
      <header className="bg-primary">
        <h5>Login</h5>
      </header>

      <div>
        <TextField
          inputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          focused
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          label="Username"
          variant="outlined"
          value="aryansingh920"
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <TextField
          inputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          focused
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          variant="outlined"
          value="1234567890"
        />
      </div>

      <div>
        <Button onClick={btnClicked} variant="outlined" type="button">
          Enroll Now!
        </Button>
      </div>

      <footer className="bg-primary">
        <p></p>
      </footer>
    </div>
  );
};

export default Login;
