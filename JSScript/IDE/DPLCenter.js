{
if (typeof DeployClient === "undefined") window.DeployClient = {};


DeployClient.DPLCenter = JavaScript.Class(undefined, {
	Setup : function() {
		return new Promise((function(___COROUTINE, ___) {
			DeployClient.g_Control.CreateControl("dpl_main_scene", this, DeployClient.g_MainLayer);
			A_UISystem.keydown_callback = this.HandleShortcutKey.bind(this);
			A_UISystem.quit_callback = this.HandleQuit.bind(this);
			this._main_menu.TryShowSettingDialog();
			___COROUTINE();
		}).bind(this));
	},
	CreateHttpFileSender : function(file_path) {
		let http_ip = "";
		http_ip = DeployClient.g_Control.host;
		return ALittle.CreateHttpFileSender(http_ip, 1800, file_path, 0);
	},
	CreateHttpSender : function() {
		let http_ip = "";
		http_ip = DeployClient.g_Control.host;
		return ALittle.CreateHttpSender(http_ip, 1800);
	},
	Shutdown : function() {
		if (this._account !== undefined) {
			this._account.Shutdown();
		}
		if (this._main_menu !== undefined) {
			this._main_menu.Shutdown();
		}
	},
	get center() {
		return this._center;
	},
	HandleShortcutKey : function(mod, sym, scancode) {
		if (A_UISystem.sym_map.get(1073741886)) {
			return;
		}
		if (A_UISystem.sym_map.get(1073741887)) {
			return;
		}
		if (A_UISystem.sym_map.get(1073741891)) {
			return;
		}
		if (this._center !== undefined) {
			this._center.HandleShortcutKey();
		}
	},
	HandleQuit : function() {
		this.HandleQuitImpl();
		return false;
	},
	HandleQuitImpl : async function() {
		ALittle.System_Exit();
	},
}, "DeployClient.DPLCenter");

DeployClient.g_DPLCenter = ALittle.NewObject(DeployClient.DPLCenter);
}