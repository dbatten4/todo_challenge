toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.taskList = [
    {
      taskContent: "Buy eggs", 
      active: true
    },
    {
      taskContent: "Buy bread", 
      active: true
    }
  ];

  self.completedTaskList = [];

  self.addTask = function(task) {
    self.taskList.push({taskContent: task});
  };

  self.completeTask = function(task) {
    if(task.active = true) {
      task.active = false;
      self.completedTaskList.push(task);
    }
  };

  self.deleteActiveTask = function(task) {
    if(task.active == true) {
      var toDelete = self.taskList.indexOf(task);
      self.taskList.splice(toDelete, 1);
    };
  };

  self.deleteCompletedTask = function(task) {
    if(task.active == false) {
      var toDelete = self.taskList.indexOf(task);
      self.completedTaskList.splice(toDelete, 1);
    };
  };

  self.reactivateTask = function(task) {
    if(task.active == false) {
      task.active = true;
    };
  };


}]);