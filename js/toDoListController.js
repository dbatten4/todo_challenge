toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.activeTaskList = [
    {
      taskContent: "Buy eggs"
    }
  ];

  self.completedTaskList = [];

  self.addTask = function(task) {
    self.activeTaskList.push({taskContent: task});
  };

  self.completeTask = function(task) {
    self.completedTaskList.push(task);
  };

}]);