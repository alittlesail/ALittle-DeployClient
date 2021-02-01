{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (ALittle.Linear === undefined) throw new Error(" extends class:ALittle.Linear is undefined");
DeployClient.DPLUIMainMenu = JavaScript.Class(ALittle.Linear, {
	TCtor : function() {
		let group = new Map();
		let ___OBJECT_1 = this._childs;
		for (let index = 1; index <= ___OBJECT_1.length; ++index) {
			let child = ___OBJECT_1[index - 1];
			if (child === undefined) break;
			child.group = group;
		}
		this._version_manager = ALittle.NewObject(AUIPlugin.AUIVersionManager, "www.alittleide.com", 1100, "alittle", "ALittleDeploy");
	},
	Shutdown : function() {
	},
	HandleMenuHide : function(button) {
		button.selected = false;
	},
	HandleHelpMenuClick : function(event) {
		let menu = ALittle.NewObject(AUIPlugin.AUIRightMenu);
		menu.Show(event.target, this.HandleMenuHide.bind(this, event.target));
	},
	HandleSettingMenuClick : function(event) {
	},
	TryShowSettingDialog : function() {
	},
	ShowSettingDialog : function() {
		if (this._setting_dialog === undefined) {
			this._setting_dialog = DeployClient.g_Control.CreateControl("setting_dialog", this);
			A_LayerManager.AddToModal(this._setting_dialog);
			this._setting_ip.text = DeployClient.g_DPLConfig.GetString("setting_ip", "");
		}
		this._setting_dialog.visible = true;
	},
	HandleSettingComfirmClick : function(event) {
		this._setting_dialog.visible = false;
		let ip = this._setting_ip.text;
		if (DeployClient.g_DPLConfig.GetString("setting_ip", "") === ip) {
			return;
		}
		DeployClient.g_DPLConfig.SetConfig("setting_ip", ip);
		DeployClient.g_DPLWebLoginManager.Shutdown();
		DeployClient.g_DPLWebLoginManager.Setup(ip, 1801, false, DeployClient.g_DPLConfig);
	},
	HandleSettingCancelClick : function(event) {
		this._setting_dialog.visible = false;
	},
}, "DeployClient.DPLUIMainMenu");

}