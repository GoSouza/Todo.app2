import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import useAuth from '../Hooks/useAuth'; // Importe useAuth

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useAuth(); // Obtém o usuário atual do contexto de autenticação

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const taskObj = {
      Name: taskName,
      Description: description,
      userId: user.email,
    };

    // Verifique se o usuário atual é o proprietário da tarefa
    if (user.email === taskObj.userId) {
      save(taskObj);
    } else {
      // Exiba uma mensagem de erro ou impeça a criação da tarefa aqui
      console.error('Você não tem permissão para criar esta tarefa.');
    }

    // Feche o modal, independentemente do resultado
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control task-description"
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
