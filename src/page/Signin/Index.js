
import React, { useState } from "react";
import Input from "../../components/Input/Index";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; 



const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const response = await axios.post(
      "http://localhost:8080/api/token/generate-token",
      {
        email: email,
        password: senha,
      }
    );
    console.log(response);
    const token = response.data.token;
    localStorage.setItem("token", token);
  navigate("/TodoList");
  };
  
  return (
    <C.Container>
      <C.Label>ENTRE COM LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <button className="btn btn-primary mt-2" onClick={handleLogin}>
          Entrar
        </button>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;