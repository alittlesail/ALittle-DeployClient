{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (DeployClient.CommonJobDialog === undefined) throw new Error(" extends class:DeployClient.CommonJobDialog is undefined");
DeployClient.SendVirtualKeyJobDialog = JavaScript.Class(DeployClient.CommonJobDialog, {
	get type() {
		return 4;
	},
	ShowDetail : function(detail) {
		if (detail !== undefined) {
			this._exe_path_list.text = ALittle.String_Join(detail.virtualkey_exepath, "\n");
			this._cmd_list.text = ALittle.String_Join(detail.virtualkey_cmd, "\n");
		} else {
			this._exe_path_list.text = "";
			this._cmd_list.text = "";
		}
	},
	GetDetail : function() {
		let detail = {};
		detail.virtualkey_exepath = ALittle.String_SplitSepList(this._exe_path_list.text, ["\r", "\n"]);
		detail.virtualkey_cmd = ALittle.String_SplitSepList(this._cmd_list.text, ["\r", "\n"]);
		return detail;
	},
}, "DeployClient.SendVirtualKeyJobDialog");

}