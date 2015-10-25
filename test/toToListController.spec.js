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
      active: true
    },
    {
      taskContent: "Buy bread", 
      active: true
    }
    ];

    it('displays list of tasks', function() {
      expect(ctrl.taskList).toEqual(tasks);
    });

    it('can add a task to the list of active tasks', function() {
      ctrl.addTask("Buy milk");
      expect(ctrl.taskList[2].taskContent).toContain("Buy milk");
    });
  });

  describe('completing and removing tasks', function() {

    it('can complete a task', function() {
      ctrl.completeTask(ctrl.taskList[0]);
      expect(ctrl.completedTaskList[0].taskContent).toContain("Buy eggs");
      expect(ctrl.taskList[0].active).toBe(false);
    });

    it('can delete an active task', function() {
      ctrl.deleteActiveTask(ctrl.taskList[0]);
      expect(ctrl.taskList[0].taskContent).not.toContain("Buy eggs");
    })

    it('can delete a completed task', function() {
      ctrl.completeTask(ctrl.taskList[0]);
      ctrl.deleteCompletedTask(ctrl.completedTaskList[0]);
      expect(ctrl.completedTaskList.length).toEqual(0);
    })
  });


});