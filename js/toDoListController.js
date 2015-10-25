toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.activeTaskList = [
    {
      taskContent: "Buy eggs"
    }
  ];

  self.addTask = function(task) {
    self.activeTaskList.push({taskContent: task});
  };

}]);