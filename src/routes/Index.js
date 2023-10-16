import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import Signin from "../page/Signin/Index";
import Signup from "../page/Signup/Index";
import TodoList from "../page/TodoList";


// const Private = ({ token }) => {
//   const { userToken } = useAuth();

//   return userToken ? <token /> : <Signin />;
// };


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        {/* <Route exact path="/TodoList" element={<Private token={TodoList} />} /> */}
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
