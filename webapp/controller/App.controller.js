sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.swcc.finance.SSP_Finance.controller.App", {
		onInit: function () {
			console.log("test");

			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});