sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("git.test.WebIDETestGit.controller.Main", {

		onOk: function() {
			MessageToast.show("Okeyking");
		}

	});
});