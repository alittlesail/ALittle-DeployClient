{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (DeployClient.CommonJobDialog === undefined) throw new Error(" extends class:DeployClient.CommonJobDialog is undefined");
DeployClient.CreateProcessJobDialog = JavaScript.Class(DeployClient.CommonJobDialog, {
	get type() {
		return 6;
	},
	ShowDetail : function(detail) {
		if (detail !== undefined) {
			this._exe_path.text = ALittle.String_Join(detail.createprocess_exe_path, "\n");
		} else {
			this._exe_path.text = "";
		}
	},
	GetDetail : function() {
		let detail = {};
		detail.createprocess_exe_path = ALittle.String_SplitSepList(this._exe_path.text, ["\r", "\n"]);
		return detail;
	},
}, "DeployClient.CreateProcessJobDialog");

}