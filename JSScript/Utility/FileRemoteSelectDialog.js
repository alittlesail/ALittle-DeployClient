{
if (typeof DeployClient === "undefined") window.DeployClient = {};

ALittle.RegStruct(-1210770538, "DeployServer.AShowCurPath", {
name : "DeployServer.AShowCurPath", ns_name : "DeployServer", rl_name : "AShowCurPath", hash_code : -1210770538,
name_list : ["path"],
type_list : ["string"],
option_map : {}
})
ALittle.RegStruct(1018450360, "DeployServer.QShowCurPath", {
name : "DeployServer.QShowCurPath", ns_name : "DeployServer", rl_name : "QShowCurPath", hash_code : 1018450360,
name_list : [],
type_list : [],
option_map : {}
})

if (ALittle.EventDispatcher === undefined) throw new Error(" extends class:ALittle.EventDispatcher is undefined");
DeployClient.FileRemoteSelectDialog = JavaScript.Class(ALittle.EventDispatcher, {
	Shutdown : function() {
		if (this._layout !== undefined) {
			this._layout.Release();
		}
		if (this._dialog !== undefined) {
			A_LayerManager.RemoveFromModal(this._dialog);
			this._dialog = undefined;
		}
	},
	HideDialog : function() {
		if (this._layout !== undefined) {
			this._layout.Release();
		}
		if (this._dialog !== undefined) {
			this._dialog.visible = false;
		}
	},
	ShowDialog : function() {
		if (this._layout !== undefined) {
			this._layout.Release();
		}
		this.CreateDialog();
		this._dialog.visible = true;
	},
	CreateDialog : function() {
		if (this._dialog === undefined) {
			this._dialog = DeployClient.g_Control.CreateControl("file_remote_select_dialog", this);
			A_LayerManager.AddToModal(this._dialog);
			this._dialog.close_callback = this.HandleDialogClose.bind(this);
			this._layout.Init(undefined);
		}
	},
	get base_path() {
		if (this._layout === undefined) {
			return undefined;
		}
		return this._layout.base_path;
	},
	ShowSelect : function(file_or_dir) {
		return new Promise((async function(___COROUTINE, ___) {
			this.ShowDialog();
			let msg = {};
			let [error, rsp] = await ALittle.IMsgCommon.InvokeRPC(1018450360, DeployClient.g_DPLWebLoginManager.msg_client, msg);
			if (error === undefined) {
				let index = ALittle.String_Find(rsp.path, ":");
				if (index !== undefined) {
					this.SetBasePath(ALittle.String_Sub(rsp.path, 1, index));
				} else {
					this.SetBasePath(rsp.path);
				}
			}
			let result = await this._layout.ShowSelect(file_or_dir);
			this._dialog.visible = false;
			___COROUTINE(result); return;
		}).bind(this));
	},
	HandleDialogClose : function() {
		if (this._layout !== undefined) {
			this._layout.Release();
		}
		return true;
	},
	SetPath : function(base_path, rel_path) {
		this.CreateDialog();
		return this._layout.SetPath(base_path, rel_path);
	},
	SetBasePath : function(base_path) {
		return this.SetPath(base_path, "");
	},
	Refresh : function() {
		if (this._layout !== undefined) {
			this._layout.Refresh();
		}
	},
}, "DeployClient.FileRemoteSelectDialog");

DeployClient.g_FileRemoteSelectDialog = ALittle.NewObject(DeployClient.FileRemoteSelectDialog);
}