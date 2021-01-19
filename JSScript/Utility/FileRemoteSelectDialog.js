{
if (typeof DeployClient === "undefined") window.DeployClient = {};


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
	ShowSelect : function() {
		return new Promise((async function(___COROUTINE, ___) {
			this.ShowDialog();
			let result = await this._layout.ShowSelect();
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
		if (this.base_path === base_path) {
			return true;
		}
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