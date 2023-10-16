// import React, { useState } from "react";
// import Input from "../../components/Input/Index";
// import * as C from "./styles";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [emailConf, setEmailConf] = useState("");
//   const [senha, setSenha] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const { signup } = useAuth();

//   const handleSignup = () => {
//     if (!email | !emailConf | !senha) {
//       setError("Preencha todos os campos");
//       return;
//     } else if (email !== emailConf) {
//       setError("Os e-mails não são iguais");
//       return;
//     }

//     const res = signup(email, senha);

//     if (res) {
//       setError(res);
//       return;
//     }

//     alert("Usuário cadatrado com sucesso!");
//     navigate("/");
//   };

//   return (
//     <C.Container>
//       <C.Label>SISTEMA DE LOGIN</C.Label>
//       <C.Content>
//         <Input
//           type="email"
//           placeholder="Digite seu E-mail"
//           value={email}
//           onChange={(e) => [setEmail(e.target.value), setError("")]}
//         />
//         <Input
//           type="email"
//           placeholder="Confirme seu E-mail"
//           value={emailConf}
//           onChange={(e) => [setEmailConf(e.target.value), setError("")]}
//         />
//         <Input
//           type="password"
//           placeholder="Digite sua Senha"
//           value={senha}
//           onChange={(e) => [setSenha(e.target.value), setError("")]}
//         />
//         <C.labelError>{error}</C.labelError>
//         <button className="btn btn-primary mt-2" onClick= {handleSignup}>
//         Inscrever-se
//   </button>
//         <C.LabelSignin>
//           Já tem uma conta?
//           <C.Strong>
//             <Link to="/">&nbsp;Entre</Link>
//           </C.Strong>
//         </C.LabelSignin>
//       </C.Content>
//     </C.Container>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import Input from "../../components/Input/Index";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    try {
      // Faça uma solicitação para a rota de criação de usuário em sua API
      const response = await axios.post("http://localhost:8080/api/users/create", {
        email: email,
        password: senha
      });

      console.log(response);
      alert("Usuário cadastrado com sucesso!");
      navigate("/"); // Redirecione o usuário para a página de login após o registro
    } catch (err) {
      setError("Erro ao criar usuário. Verifique os campos e tente novamente.");
    }
  };


  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <button className="btn btn-primary mt-2" onClick={handleSignup}>
          Inscrever-se
        </button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
