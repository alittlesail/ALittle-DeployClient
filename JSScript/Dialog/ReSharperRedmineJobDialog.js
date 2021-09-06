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
			let list = [];
			let ___OBJECT_1 = detail.r2r_redmine_account_map;
			for (let account in ___OBJECT_1) {
				let num = ___OBJECT_1[account];
				if (num === undefined) continue;
				ALittle.List_Push(list, num + ":" + account);
			}
			this._redmine_account_map.text = ALittle.String_Join(list, ";");
			if (detail.r2r_code_tool === "svn") {
				this._code_tool.text = "svn";
			} else if (detail.r2r_code_tool === "git") {
				this._code_tool.text = "git";
			} else {
				this._code_tool.text = "";
			}
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
			this._redmine_account_map.text = "";
			this._code_tool.text = "";
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
		detail.r2r_redmine_account_map = {};
		let list = ALittle.String_Split(this._redmine_account_map.text, ";");
		let ___OBJECT_2 = list;
		for (let index = 1; index <= ___OBJECT_2.length; ++index) {
			let info = ___OBJECT_2[index - 1];
			if (info === undefined) break;
			let split_list = ALittle.String_Split(info, ":");
			if (ALittle.List_Len(split_list) === 2) {
				let num = ALittle.Math_ToInt(split_list[2 - 1]);
				if (num !== undefined) {
					detail.r2r_redmine_account_map[split_list[1 - 1]] = num;
				}
			}
		}
		if (this._code_tool.text === "svn") {
			detail.r2r_code_tool = "svn";
		} else if (this._code_tool.text === "git") {
			detail.r2r_code_tool = "git";
		} else {
			detail.r2r_code_tool = "";
		}
		return detail;
	},
	HandleExeBrowserClick : async function(event) {
		this._resharper_exe_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect(true);
	},
	HandleCacheBrowserClick : async function(event) {
		this._resharper_cache_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect(false);
	},
	HandleOutputBrowserClick : async function(event) {
		this._resharper_output_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect(false);
	},
	HandleSlnBrowserClick : async function(event) {
		this._resharper_sln_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect(true);
	},
	HandleCurlBrowserClick : async function(event) {
		this._curl_exe_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect(true);
	},
	HandleDotSettingsBrowserClick : async function(event) {
		this._resharper_dotsettings_path.text = await DeployClient.g_FileRemoteSelectDialog.ShowSelect(true);
	},
}, "DeployClient.ReSharperRedmineJobDialog");

}