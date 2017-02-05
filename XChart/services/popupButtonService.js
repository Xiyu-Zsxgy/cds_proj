popupApp.service('popupService', function ($ionicPopup, $location, $ionicHistory, historyUtils) {
	var service = {};

	service.alertPopup = function (options, navigate, asRoot) {
		var alertPopup = $ionicPopup.alert(options);
		alertPopup.then(function (res) {
			if (res) {
				historyUtils.studioNavigate(navigate,asRoot);
				// if (asRoot) {
				// 	$ionicHistory.nextViewOptions({
				// 		disableBack: true
				// 	});
				// }
				// if (navigate) {
				// 	$location.path(navigate);
				// }
				// console.log('Alert read.');
			}
		});
	};

	service.confirmPopup = function (options, navigate, asRoot) {
		var confirmPopup = $ionicPopup.confirm(options);

		confirmPopup.then(function (res) {
			if (res) {
				historyUtils.studioNavigate(navigate,asRoot);
				// if (asRoot) {
				// 	$ionicHistory.nextViewOptions({
				// 		disableBack: true
				// 	});
				// }
				// if (navigate) {
				// 	$location.path(navigate);
				// }
				console.log('You click OK.');
			} else {
				console.log('You click cancel.');
			}
		});
	};
	return service;
});
