import React, {useState} from 'react';
import EditTask from '../modals/EditTask';
import useAuth from "../Hooks/useAuth"; // Importe useAuth


const Cards = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const { user } = useAuth(); // Obtém o usuário atual do contexto de autenticação
    

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index);
    }

    const handleDelete = () => {
        // Verifica se o usuário atual é o proprietário da tarefa
        if (taskObj.userId === user.email) {
          deleteTask(index);
        } else {
          // Exiba uma mensagem de erro ou impeça a exclusão aqui
          console.error("Você não tem permissão para excluir esta tarefa.");
        }
      };


    return (
        <div class = "card-wrapper">
            <div className = "card-top" style = {{backgroundColor: colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header task-name" style={{backgroundColor: colors[index%5].secondaryColor, 
                "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className='mt-3 task-description'>{taskObj.Description}</p>

                <div style = {{"position": "absolute", "right": "10px", "bottom": "8px"}}>
                    <i className = "far fa-edit" style = {
                        {"color": colors[index%5].primaryColor, "cursor": "pointer"}
                        } onClick = { () => setModal(true)}></i> 
                    <i className = "fas fa-trash-alt" style = {
                        {"color": colors[index%5].primaryColor, "cursor": "pointer"}
                        } onClick = {handleDelete}></i>

                </div>
            </div>
            <EditTask modal = {modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
        </div>
    );
};

export default Cards;