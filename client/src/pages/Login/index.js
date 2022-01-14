import { useState } from "react";
import axios from "axios";
import './Login.css'
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const login = {
      email: email,
      password: password
    };

    axios.post("auth/login", login).then((response) => {
      const tokenValue = response.data.token;
      localStorage.setItem("token", tokenValue);
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mt-4 justify-content-center">
          <h3 className="d-flex justify-content-center">Sing up</h3>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Insert Your Email"
                required
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <label htmlFor="email">Email:</label>
            </div>
          </div>
          <div className="col-8 ">
            <div className="form-floating mb-2">
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Insert Your password"
                required
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <label htmlFor="password">Password:</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="d-flex justify-content-center  gap-2 ">
              <button className="btn btn-success " type="submit">
                Logar
              </button>
            </div>
            <span className="d-flex justify-content-center  gap-2 ">Ainda não tem conta ?
            <Link className="linkconfig" to='/CadUser' >
            Cadastre-se Aqui.
            </Link>
            </span>

          </div>
        </div>
      </form>
    </div>
  );
}
