var popupApp = angular.module("popupApp", []);
popupApp.directive("popupButton", ['popupService', function (popupService) {
	return {
		restrict: 'E',
		template: "<button class='button button-full {{theme}}'>{{label}}</button>",
		replace: true,
		scope: true,
		link: function (scope, element, attr) {
			scope.theme = attr.popuptheme;
			scope.label = attr.popuplabel;
			scope.width = attr.popupwidth;

			var options = {
				template: attr.popuptemplate, // String (optional). The html template to place in the popup body.
				cancelText: attr.popupcanceltext, // String (default: 'Cancel'). The text of the Cancel button.
				cancelType: attr.popupcanceltype, // String (default: 'button-default'). The type of the Cancel button.
				okText: attr.popupoktext, // String (default: 'OK'). The text of the OK button.
				okType: attr.popupoktype // String (default: 'button-positive'). The type of the OK button.
			};

			var navigate = attr.pagelink ? attr.pagelink.substring(attr.pagelink.indexOf('#') + 1) : "",
				asRoot = false;

			switch (attr.rootdirect){
				case "true":
					asRoot = true;
					break;
				case "false":
					asRoot = false;
					break;
				default:
					asRoot = false;

			}

			element.bind('click', function (event) {
				switch (attr.popuptype) {
					case "confirm":
						popupService.confirmPopup(options, navigate, asRoot);
						break;
					case "alert":
						popupService.alertPopup(options, navigate, asRoot);
						break;
					default:
						popupService.alertPopup(options, navigate, asRoot);
				}


			});
		}
	};
}]);
