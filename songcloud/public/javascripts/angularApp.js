var app = angular.module('songCloud', []);

app.controller('MainCtrl', 
	[
		'$scope',

		function($scope, $http)
		{
			$scope.listOfSongs = null;


		    $http.get('songInfo.json').then(function (res) 
		         {
		             $scope.listOfSongs = res.data;
		         })
		         .error(function (data, status, headers, config) 
		         {
		             //  Do some error handling here
		         });


		  // $scope.songs = [
				//   'song 1',
				//   'song 2',
				//   'song 3',
				//   'song 4',
				//   'song 5',
				//   'song 6',
				//   'song 7',
				//   'song 8',
				//   'song 9',
				//   'song 10',
				//   'song 11',
				// ];

		}
	]
	);