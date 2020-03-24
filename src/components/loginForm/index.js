import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="LoginScreen">
      <div id="background-login" />
      <form id="login-form" method="post">
        <h1>Meeting App</h1>
        <input
          id="user"
          type="text"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          placeholder="Usuário"
        />

        <input
          id="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Senha"
        />

        <p>Esqueceu sua senha?</p>
        <Link id="btn-router-component" to="/home">
          <input
            type="button"
            value="Acessar"
            draggable="false"
            id="btnEntrar"
          />
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
