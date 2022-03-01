import React, { useState } from "react";
import { LoginModel } from "../Types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { account } from "../features/account";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length > 1 && password.length > 1) {
      let toSubmit: LoginModel = {
        email,
        password,
        rememberMe,
      };

      axios
        .post(
          "https://localhost:7015/api/Account/login",
          {
            ...toSubmit,
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((dt) => {
          localStorage.setItem("authToken", dt.data.message);
          localStorage.setItem("email", email);
          dispatch(
            account({
              type: "LOGIN",
              token: dt.data.message,
              email: email,
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <form className="form container" onSubmit={handleSubmit}>
      <div className="row m-2">
        <input
          type="email"
          className="col-sm-10 form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="row m-2">
        <input
          type="password"
          className="col-sm-10 form-control"
          placeholder="Haslo"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="row m-2">
        <label className="col-sm-2">Pamietaj:</label>
        <input
          type="checkbox"
          className="col-sm-10"
          placeholder="Email"
          onChange={(e) => {
            setRememberMe(e.target.value === "checked");
          }}
        />
      </div>
      <button className="row m-2 btn btn-success" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
