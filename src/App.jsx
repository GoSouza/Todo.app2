import React from "react";
import RoutesApp from "./routes/Index";
import { AuthProvider } from "./Contexts/Auth";
import GlobalStyle from "./styles/global";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
