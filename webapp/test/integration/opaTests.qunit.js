/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/swcc/finance/SSP_Finance/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});