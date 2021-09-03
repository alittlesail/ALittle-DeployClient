{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (DeployClient.CommonJobDialog === undefined) throw new Error(" extends class:DeployClient.CommonJobDialog is undefined");
DeployClient.BatchJobDialog = JavaScript.Class(DeployClient.CommonJobDialog, {
	get type() {
		return 1;
	},
	ShowDetail : function(detail) {
		if (detail !== undefined) {
			this._dir.text = detail.batch_dir;
			this._cmd.text = detail.batch_cmd;
			this._param.text = detail.batch_param;
			this._wait_complete_cbtn.selected = detail.batch_wait;
		} else {
			this._dir.text = "";
			this._cmd.text = "";
			this._param.text = "";
			this._wait_complete_cbtn.selected = true;
		}
	},
	GetDetail : function() {
		let detail = {};
		detail.batch_dir = this._dir.text;
		detail.batch_cmd = this._cmd.text;
		detail.batch_param = this._param.text;
		detail.batch_wait = this._wait_complete_cbtn.selected;
		return detail;
	},
	HandleBrowserClick : async function(event) {
		this._dir.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
}, "DeployClient.BatchJobDialog");

}