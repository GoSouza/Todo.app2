// import React, { useEffect, useState } from "react";
// import CreateTask from "../modals/CreateTask";
// import Cards from "../components/Cards";
// import TodoListController from "../Controller/TodoListController";
// import LogoutButton from "../modals/LogoutButton/Index";
// import useAuth from "../Hooks/useAuth"; // Importe useAuth


// const TodoList = () => {
//   const [modal, setModal] = useState(false);
//   const [taskList, setTaskList] = useState([]);
//   const { user } = useAuth(); // Obtém o usuário atual do contexto de autenticação

//   useEffect(() => {
//     // Filtra as tarefas com base no userId do usuário atual
//     const filteredTasks = TodoListController.getTaskList().filter(
//       (task) => task.userId === user.email
//     );
//     setTaskList(filteredTasks);
//   }, [user]);

//   const deleteTask = (index) => {
//     setTaskList(TodoListController.deleteTask(index));
//   };

//   const updateListArray = (obj, index) => {
//     setTaskList(TodoListController.updateListArray(obj, index));
//   };

//   const toggle = () => {
//     setModal(!modal);
//   };

//   const saveTask = (taskObj) => {
//     // Passa o userId do usuário atual para a função saveTask
//     setTaskList(TodoListController.saveTask(taskObj, user.email));
//     setModal(false);
//   };

//   return (
//     <>
//       <div className="header text-center">
//         <h3>Todo List</h3>
//         <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
//           Create task
//         </button>
//         <span className="spacer"></span>
//         <LogoutButton />
//       </div>
//       <div className="task-container">
//         {taskList &&
//           taskList.map((obj, index) => (
//             <Cards
//               taskObj={obj}
//               index={index}
//               deleteTask={deleteTask}
//               updateListArray={updateListArray}
//             />
//           ))}
//       </div>
//       <CreateTask toggle={toggle} modal={modal} save={saveTask} />
//     </>
//   );
// };

// export default TodoList;


import React, { useEffect, useState, useContext } from "react";
import CreateTask from "../modals/CreateTask";
import Cards from "../components/Cards";
import TodoListController from "../Controller/TodoListController";
import LogoutButton from "../modals/LogoutButton/Index";
import { AuthContext } from "../Contexts/Auth"; // Importe o contexto de autenticação

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const { userToken } = useContext(AuthContext); // Obtém o token JWT do contexto de autenticação

  useEffect(() => {
    if (userToken) {
     
      TodoListController.getAllTasks(userToken)
        .then((response) => {
          setTaskList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userToken]);

  const deleteTask = (index) => {
    TodoListController.deleteTask(taskList[index].id, userToken)
      .then(() => {
        const updatedTasks = [...taskList];
        updatedTasks.splice(index, 1);
        setTaskList(updatedTasks);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateListArray = (obj, index) => {
    TodoListController.updateListArray(obj, userToken)
      .then(() => {
        const updatedTasks = [...taskList];
        updatedTasks[index] = obj;
        setTaskList(updatedTasks);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    TodoListController.saveTask(taskObj, userToken)
      .then((response) => {
        setTaskList([...taskList, response.data]);
        setModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create task
        </button>
        <span className="spacer"></span>
        <LogoutButton />
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Cards
              taskObj={obj}
              index={index}
              deleteTask={() => deleteTask(index)}
              updateListArray={(updatedObj) => updateListArray(updatedObj, index)}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
