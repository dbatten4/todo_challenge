describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('adding and displaying task items', function() {
    var tasks = [
      {
        taskContent: "Buy eggs",
      }
    ];

    it('displays list of tasks', function() {
      expect(ctrl.activeTaskList).toEqual(tasks);
    });

    it('can add a task to the list of active tasks', function() {
      ctrl.addTask("Buy milk");
      expect(ctrl.activeTaskList[1].taskContent).toContain("Buy milk");
    })

  });


});