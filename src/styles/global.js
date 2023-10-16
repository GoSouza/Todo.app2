import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
  }

  .header {
    height: 200px;
    width: 100%;
    background-color: #e9eef6;
    padding-top: 50px;
  }

  .card-top {
    width: 100%;
    height: 2%;
  }

  .task-holder {
    width: 100%;
    height: 98%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card-header {
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: auto;
    height: 30px;
    padding: 1px 1px !important;
    text-align: center;
    white-space: nowrap; /* Evita que o texto seja quebrado em várias linhas */
    overflow: hidden; /* Esconde o texto que não cabe */
    text-overflow: ellipsis; /* Mostra "..." quando o texto é cortado */
  }

  .task-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px; /* Reduzido o padding para melhor responsividade */
    justify-content: center; /* Centraliza os Cards na tela */
  }

  .card-wrapper {
    width: 270px;
    height: 200px;
    margin-right: 20px; /* Reduzido o margin-right para melhor responsividade */
    margin-bottom: 20px; /* Adicionado margin-bottom para espaçamento entre os Cards */
    box-shadow: 0px 3px 10px #a5a5a5;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Adicionado overflow para ocultar conteúdo que estourar o container */
  }

  @media only screen and (max-width: 768px) {
    .card-wrapper {
      width: 200px;
      height: 150px;
      margin-right: 10px;
      margin-bottom: 10px;
      overflow-y: auto;
    }
  }

  @media only screen and (max-width: 480px) {
    .card-wrapper {
      width: 150px;
      height: 100px;
      margin-right: 5px;
      margin-bottom: 5px;
      overflow-y: auto;
    }
  }

  .task-description {
    max-height: 60px; /* Reduzido o máximo de altura */
    overflow-y: auto;
  }

  .task-name {
    max-height: 30px; /* Reduzido o máximo de altura */
    overflow-y: auto;
  }

  .fa-edit {
    font-size: 16px;
    margin: 0px 5px; /* Reduzido o espaçamento entre os ícones */
  }

  .spacer {
    margin-left: 10px;
  }
`;

export default GlobalStyle;
