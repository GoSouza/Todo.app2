const TodoListController = {

  
  getTaskList: () => {
    let taskList = localStorage.getItem("taskList");
    if (taskList) {
      return JSON.parse(taskList);
    } else {
      return [];
    }
  },

  deleteTask: (index) => {
    let tempList = TodoListController.getTaskList();
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    return tempList;
  },

  updateListArray: (obj, index) => {
    let tempList = TodoListController.getTaskList();
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    return tempList;
  },

   saveTask: (taskObj, userId) => {
    let tempList = TodoListController.getTaskList();
    taskObj.userId = userId;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    return tempList;
  },
  
  

  
};

export default TodoListController;