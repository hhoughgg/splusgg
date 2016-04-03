angular.module('splus.teams', [])
	.controller('TeamController', function($rootScope, $scope, DataHandler, BuildData) {
		$scope.data = DataHandler.gameData.data;
		$scope.blueteam = DataHandler.blueteam;
		$scope.redteam = DataHandler.redteam;
		$scope.bluebans = DataHandler.bluebans;
		$scope.redbans = DataHandler.redbans;
		$scope.highestTier = DataHandler.primaryPlayer.tier;
		$scope.gameStarted = $scope.data.gameStartTime;
		$rootScope.bgid = 'teamsbg';

		$scope.insertData = function() {
			BuildData.buildPlayerObjects();
			BuildData.getTierData();
			console.log(DataHandler);
		}

		$scope.insertData();
	});

