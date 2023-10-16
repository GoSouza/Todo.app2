import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import useAuth from "../Hooks/useAuth"; // Importe useAuth

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useAuth(); // Obtém o usuário atual do contexto de autenticação

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [taskObj.Name, taskObj.Description])
     

    const handleUpdate = (e) => {
        e.preventDefault();
        // Verifica se o usuário atual é o proprietário da tarefa
        if (taskObj.userId === user.email) {
          let updatedTaskObj = { ...taskObj }; // Crie uma cópia do objeto
          updatedTaskObj.Name = taskName; // Atualize o Name com o novo valor
          updatedTaskObj.Description = description; // Atualize a Description com o novo valor
          updateTask(updatedTaskObj); // Chame a função updateTask com o objeto atualizado
          toggle();
        } else {
          // Exiba uma mensagem de erro ou impeça a edição aqui
          console.error("Você não tem permissão para editar esta tarefa.");
        }
      };
      


    return (
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
              <div className="form-group">
                  <label>Task Name</label>
                  <input type="text" className= "form-control" value={taskName} 
                  onChange={handleChange} name= "taskName"/>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea rows = "5" className= "form-control" value={description} 
                onChange={handleChange} name="description"></textarea>
              </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
}

export default EditTask;