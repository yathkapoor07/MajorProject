var employeeAppModule = angular.module("employeeApp", []);    
 employeeAppModule.controller("employeeCtrl", function ($scope,$http) {    
   $http.get('Employee.json')    
   .success(function(data){    
     $scope.employees = data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.employees = { };     
   });    
 });    