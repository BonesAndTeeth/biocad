angular.module('BioCAD.controllers', [])
.controller('buttonCtrl',["$scope", function($scope){
	$scope.AddPiece = function(){
		alert("Add A!!!");
		//$window.globals.CreatePiece();
	}
}])