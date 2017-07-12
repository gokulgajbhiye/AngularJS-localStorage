angular.module('caEWT', [
	 'ngRoute',
   'templates-bootstrap',
    'ngRoute',
    'ui.bootstrap',
    'ui.calendar',
    'ui.bootstrap.tabs',
    'datatables',
    'ngResource',
    'ngSanitize',
    'ngStorage',
    'ui.bootstrap.datepicker',
    'flow'   
])

angular.module('caEWT').controller('addTaskController', function ($scope, $localStorage, $sessionStorage, $window, $http, $resource, DTOptionsBuilder) {
  $scope.dtOptions = DTOptionsBuilder.newOptions()
      .withDisplayLength(10)
      .withOption('bLengthChange', false);

  $scope.saved = localStorage.getItem('taskLists');
  $scope.taskLists = (localStorage.getItem('taskLists')!==null) ? JSON.parse($scope.saved) : [
      {
        id:'#0001',
        title:'Resolve binding issue',
        project:'Loreum Lipsum',
      }];
  localStorage.setItem('taskLists', JSON.stringify($scope.taskLists));
  $scope.addTask = function(){
    $scope.taskLists.push({
       id:$scope.taskName,
       title:$scope.taskTitle,
       project:$scope.taskProject
    });
    $scope.taskName = '';
    $scope.taskTitle = '';
    $scope.taskProject = '';
    localStorage.setItem('taskLists', JSON.stringify($scope.taskLists));
  };
})




