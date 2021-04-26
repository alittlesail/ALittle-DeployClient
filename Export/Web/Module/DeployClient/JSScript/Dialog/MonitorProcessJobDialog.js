{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (DeployClient.CommonJobDialog === undefined) throw new Error(" extends class:DeployClient.CommonJobDialog is undefined");
DeployClient.MonitorProcessJobDialog = JavaScript.Class(DeployClient.CommonJobDialog, {
	get type() {
		return 10;
	},
	ShowDetail : function(detail) {
		if (detail !== undefined) {
			this._exe_path.text = detail.monitorprocess_exe_path;
		} else {
			this._exe_path.text = "";
		}
	},
	GetDetail : function() {
		let detail = {};
		detail.monitorprocess_exe_path = this._exe_path.text;
		return detail;
	},
	HandleExeBrowserClick : async function(event) {
		this._exe_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
}, "DeployClient.MonitorProcessJobDialog");

}