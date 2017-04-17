(function() {
	'use strict';
	angular
	.module('wsLivraisonApp')
	.controller('CommandWineController', CommandWineController);

	CommandWineController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance'];

	function CommandWineController ($timeout, $scope, $stateParams, $uibModalInstance) {
		var vm = this;
		var url = window.location.href;
		vm.clear = clear;

		vm.idCommand = parseUrl();
		
		function parseUrl() {
			var arrayUrl = url.split("/");
			if(arrayUrl.length !== 0) {
				return arrayUrl[4];
			} else {
				return "";
			}
		}

		function clear() {
			$uibModalInstance.dismiss('cancel');
		}
	}	

})();