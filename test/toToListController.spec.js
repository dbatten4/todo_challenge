describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('adding and displaying task items', function() {
    var tasks = [
      {
      taskContent: 'Buy eggs', 
      active: true
    },
    {
      taskContent: 'Buy bread', 
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
      expect(ctrl.taskList[0].active).toBe(false);
    });

    it('can delete an active task', function() {
      ctrl.deleteTask(ctrl.taskList[0]);
      expect(ctrl.taskList[0].taskContent).not.toContain("Buy eggs");
    });

    it('can delete a completed task', function() {
      ctrl.completeTask(ctrl.taskList[0]);
      ctrl.deleteTask(ctrl.taskList[0]);
      expect(ctrl.taskList[0].taskContent).not.toContain("Buy eggs");
    });

    it('can delete all complete tasks', function() {
      ctrl.completeTask(ctrl.taskList[0]);
      ctrl.deleteAllCompletedTasks();
      expect(ctrl.completedTaskList.length).toEqual(0);
    });
  });

  describe('reactivating tasks', function() {

    it('can reactivate a completed task', function() {
      ctrl.completeTask(ctrl.taskList[0]);
      ctrl.reactivateTask(ctrl.taskList[0]);
      expect(ctrl.taskList[0].active).toBe(true);
    });

  });


});