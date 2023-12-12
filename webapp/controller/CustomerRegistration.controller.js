sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"

], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.swcc.finance.SSP_Finance.controller.CustomerRegistration", {
		onInit: function () {

			this.oRouter = this.getRouter();
			this.BPFlagCheckAPI();

		},
		BPFlagCheckAPI: function () {
			debugger;
			// const oModel = this.getOwnerComponent().getModel("ModuleInput");

			// this.getAPI.crudOperations_ODATA(oModel, 'read', '/ZCDSV_SS_SERVICES_F4')
			// 	.then(function (oResponse) {
			// 		var aData = oResponse.data;

			// 	}.bind(this));
			var Filter = this.getFilters("Wiitcco", "X");

			this.getAPI.oDataAPICall(this.getOwnerComponent().getModel("ZSSP_USER_SRV"), 'read', '/User',
					Filter)
				.then(function (oResponse) {
					// 		var aData = oResponse.data;

				}.bind(this));

		},
		getFilters: function (sUserName, sIsRequest) {

			var sUserNameFilter = new sap.ui.model.Filter({
				path: "UserName",
				operator: sap.ui.model.FilterOperator.EQ,
				value1: sUserName
			});

			var sIsRequestFilter = new sap.ui.model.Filter({
				path: "IsRequest",
				operator: sap.ui.model.FilterOperator.EQ,
				value1: sIsRequest
			});
			var aUserFilter = [];
			aUserFilter.push(sUserNameFilter, sIsRequestFilter);

			return aUserFilter;

		},
		onback: function () {
			//this.getOwnerComponent().getTargets().display("LandingView");

		},
		onSubmit: function () {

			this.getOwnerComponent().getRouter().navTo("SlaCreation");

		}
	})
})