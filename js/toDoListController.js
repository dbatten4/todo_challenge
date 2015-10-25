toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.taskList = [
    {
      taskContent: "Buy eggs", 
      active: true
    }
  ];

  self.completedTaskList = [];

  self.addTask = function(task) {
    self.taskList.push({taskContent: task});
  };

  self.completeTask = function(task) {
    self.completedTaskList.push(task);
  };

}]);