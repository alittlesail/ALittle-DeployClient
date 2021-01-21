{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (DeployClient.CommonJobDialog === undefined) throw new Error(" extends class:DeployClient.CommonJobDialog is undefined");
DeployClient.ReSharperRedmineJobDialog = JavaScript.Class(DeployClient.CommonJobDialog, {
	get type() {
		return 8;
	},
	ShowDetail : function(detail) {
		if (detail !== undefined) {
			this._resharper_exe_path.text = detail.r2r_resharper_exe_path;
			this._resharper_cache_path.text = detail.r2r_resharper_cache_path;
			this._resharper_output_path.text = detail.r2r_resharper_output_path;
			this._resharper_sln_path.text = detail.r2r_resharper_sln_path;
			this._resharper_dotsettings_path.text = detail.r2r_resharper_dotsettings_path;
			this._redmine_url.text = detail.r2r_redmine_url;
			this._redmine_account.text = detail.r2r_redmine_account;
			this._redmine_password.text = detail.r2r_redmine_password;
			this._redmine_project_id.text = detail.r2r_redmine_project_id;
			this._redmine_account_id.text = detail.r2r_redmine_account_id;
			this._curl_exe_path.text = detail.r2r_curl_exe_path;
		} else {
			this._resharper_exe_path.text = "";
			this._resharper_cache_path.text = "";
			this._resharper_output_path.text = "";
			this._resharper_sln_path.text = "";
			this._resharper_dotsettings_path.text = "";
			this._redmine_url.text = "";
			this._redmine_account.text = "";
			this._redmine_password.text = "";
			this._redmine_project_id.text = "";
			this._redmine_account_id.text = "";
			this._curl_exe_path.text = "";
		}
	},
	GetDetail : function() {
		let detail = {};
		detail.r2r_resharper_exe_path = this._resharper_exe_path.text;
		detail.r2r_resharper_cache_path = this._resharper_cache_path.text;
		detail.r2r_resharper_output_path = this._resharper_output_path.text;
		detail.r2r_resharper_sln_path = this._resharper_sln_path.text;
		detail.r2r_resharper_dotsettings_path = this._resharper_dotsettings_path.text;
		detail.r2r_redmine_url = this._redmine_url.text;
		detail.r2r_redmine_account = this._redmine_account.text;
		detail.r2r_redmine_password = this._redmine_password.text;
		detail.r2r_redmine_project_id = this._redmine_project_id.text;
		detail.r2r_redmine_account_id = this._redmine_account_id.text;
		detail.r2r_curl_exe_path = this._curl_exe_path.text;
		return detail;
	},
	HandleExeBrowserClick : async function(event) {
		this._resharper_exe_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
	HandleCacheBrowserClick : async function(event) {
		this._resharper_cache_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
	HandleOutputBrowserClick : async function(event) {
		this._resharper_output_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
	HandleSlnBrowserClick : async function(event) {
		this._resharper_sln_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
	HandleCurlBrowserClick : async function(event) {
		this._curl_exe_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
	HandleDotSettingsBrowserClick : async function(event) {
		this._resharper_dotsettings_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect();
	},
}, "DeployClient.ReSharperRedmineJobDialog");

}