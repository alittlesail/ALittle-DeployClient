{
if (typeof DeployClient === "undefined") window.DeployClient = {};

ALittle.RegStruct(-1492768812, "DeployServer.C2SModifyJob", {
name : "DeployServer.C2SModifyJob", ns_name : "DeployServer", rl_name : "C2SModifyJob", hash_code : -1492768812,
name_list : ["task_id","job_index","job_name","detail"],
type_list : ["int","int","string","DeployServer.JobInfoDetail"],
option_map : {}
})
ALittle.RegStruct(-1402593517, "DeployServer.S2CCreateJob", {
name : "DeployServer.S2CCreateJob", ns_name : "DeployServer", rl_name : "S2CCreateJob", hash_code : -1402593517,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(1232578034, "DeployServer.JobInfoDetail", {
name : "DeployServer.JobInfoDetail", ns_name : "DeployServer", rl_name : "JobInfoDetail", hash_code : 1232578034,
name_list : ["batch_dir","batch_cmd","batch_param","deepcopy_src","deepcopy_dst","deepcopy_ext","copyfile_src","copyfile_file","copyfile_dst","virtualkey_exepath","virtualkey_cmd","wait_p_exit_exe_path","wait_p_exit_max_time","createprocess_dir","createprocess_cmd","createprocess_param","killprocess_exe_path","r2r_resharper_exe_path","r2r_resharper_cache_path","r2r_resharper_output_path","r2r_resharper_sln_path","r2r_resharper_dotsettings_path","r2r_redmine_url","r2r_redmine_account","r2r_redmine_password","r2r_redmine_project_id","r2r_redmine_account_id","r2r_redmine_account_map","r2r_curl_exe_path","r2r_code_tool","igg_chat_room_id","igg_chat_title","igg_chat_content","igg_chat_token","monitorprocess_exe_path","monitorprocess_auto_start"],
type_list : ["string","string","string","string","string","string","string","List<string>","string","List<string>","List<string>","List<string>","int","string","string","string","List<string>","string","string","string","string","string","string","string","string","string","string","Map<string,int>","string","string","string","string","string","string","string","bool"],
option_map : {}
})
ALittle.RegStruct(812356121, "DeployServer.S2CModifyJob", {
name : "DeployServer.S2CModifyJob", ns_name : "DeployServer", rl_name : "S2CModifyJob", hash_code : 812356121,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(-105312390, "DeployServer.C2SCreateJob", {
name : "DeployServer.C2SCreateJob", ns_name : "DeployServer", rl_name : "C2SCreateJob", hash_code : -105312390,
name_list : ["task_id","job_type","job_index","job_name","detail"],
type_list : ["int","int","int","string","DeployServer.JobInfoDetail"],
option_map : {}
})

if (ALittle.Dialog === undefined) throw new Error(" extends class:ALittle.Dialog is undefined");
DeployClient.CommonJobDialog = JavaScript.Class(ALittle.Dialog, {
	Ctor : function() {
		this._is_create = false;
		this._task_id = 0;
		this._job_index = 0;
	},
	Show : function(task_id, job_index, info) {
		this._is_create = info === undefined;
		this._task_id = task_id;
		this._job_index = job_index;
		if (info !== undefined) {
			this._name.text = info.job_name;
			this.ShowDetail(info.detail);
		} else {
			this._name.text = "";
			this.ShowDetail(undefined);
		}
		DeployClient.g_DialogLayer.AddChild(this);
		this.MoveToTop();
	},
	ShowDetail : function(detail) {
	},
	get type() {
		return undefined;
	},
	Hide : function() {
		DeployClient.g_DialogLayer.RemoveChild(this);
	},
	GetDetail : function() {
		return undefined;
	},
	HandleComfirmClick : async function(event) {
		let msg_client = DeployClient.g_DPLWebLoginManager.msg_client;
		if (msg_client === undefined || !msg_client.IsConnected()) {
			g_AUITool.ShowNotice("提示", "当前还未连接成功!");
			return;
		}
		let detail = this.GetDetail();
		if (this._is_create) {
			let msg = {};
			msg.task_id = this._task_id;
			msg.job_type = this.type;
			msg.job_index = this._job_index;
			msg.job_name = this._name.text;
			msg.detail = detail;
			let [error] = await ALittle.IMsgCommon.InvokeRPC(-105312390, msg_client, msg);
			if (error !== undefined) {
				g_AUITool.ShowNotice("提示", error);
			}
		} else {
			let msg = {};
			msg.task_id = this._task_id;
			msg.job_index = this._job_index;
			msg.job_name = this._name.text;
			msg.detail = detail;
			let [error] = await ALittle.IMsgCommon.InvokeRPC(-1492768812, msg_client, msg);
			if (error !== undefined) {
				g_AUITool.ShowNotice("提示", error);
			}
		}
		this.Hide();
	},
	HandleCancelClick : function(event) {
		this.Hide();
	},
}, "DeployClient.CommonJobDialog");

}