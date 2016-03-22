(function () {
	'use strict';

	angular
		.module('app', [
			// core
			'app.core',

			// main
			'app.basic-info',
			'app.another-info',
			'app.summary-info',
		]);
})();