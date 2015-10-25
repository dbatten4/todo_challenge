describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('displaying task items', function() {
    var tasks = [
      {
        task: "Buy eggs",
      }
    ];

    it('displays list of tasks', function() {
      expect(ctrl.activeTaskList).toEqual(tasks);
    });


  });

});