{
if (typeof DeployClient === "undefined") window.DeployClient = {};
let ___all_struct = ALittle.GetAllStruct();

ALittle.RegStruct(-2127611090, "DeployClient.BuildItemInfo", {
name : "DeployClient.BuildItemInfo", ns_name : "DeployClient", rl_name : "BuildItemInfo", hash_code : -2127611090,
name_list : ["item","info","_button","_download_button"],
type_list : ["ALittle.DisplayObject","DeployServer.D_BuildInfo","ALittle.DisplayObject","ALittle.DisplayObject"],
option_map : {}
})
ALittle.RegStruct(-2035971543, "DeployServer.D_JobInfo", {
name : "DeployServer.D_JobInfo", ns_name : "DeployServer", rl_name : "D_JobInfo", hash_code : -2035971543,
name_list : ["job_type","job_name","status","progress","detail"],
type_list : ["int","string","int","double","DeployServer.JobInfoDetail"],
option_map : {}
})
ALittle.RegStruct(-2031251578, "DeployServer.C2SCopyJob", {
name : "DeployServer.C2SCopyJob", ns_name : "DeployServer", rl_name : "C2SCopyJob", hash_code : -2031251578,
name_list : ["task_id","job_index"],
type_list : ["int","int"],
option_map : {}
})
ALittle.RegStruct(1984174335, "DeployServer.S2CDeleteBuild", {
name : "DeployServer.S2CDeleteBuild", ns_name : "DeployServer", rl_name : "S2CDeleteBuild", hash_code : 1984174335,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(1811432266, "DeployServer.D_BuildInfo", {
name : "DeployServer.D_BuildInfo", ns_name : "DeployServer", rl_name : "D_BuildInfo", hash_code : 1811432266,
name_list : ["create_time","create_index"],
type_list : ["int","int"],
option_map : {}
})
ALittle.RegStruct(1809409109, "DeployServer.S2CDeleteJob", {
name : "DeployServer.S2CDeleteJob", ns_name : "DeployServer", rl_name : "S2CDeleteJob", hash_code : 1809409109,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(1800966813, "ALittle.UISystemSelectDirectoryEvent", {
name : "ALittle.UISystemSelectDirectoryEvent", ns_name : "ALittle", rl_name : "UISystemSelectDirectoryEvent", hash_code : 1800966813,
name_list : ["target","path"],
type_list : ["ALittle.DisplayObject","string"],
option_map : {}
})
ALittle.RegStruct(1624339767, "DeployServer.S2CMoveJob", {
name : "DeployServer.S2CMoveJob", ns_name : "DeployServer", rl_name : "S2CMoveJob", hash_code : 1624339767,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(1566214727, "DeployServer.S2CUpdateTaskInfo", {
name : "DeployServer.S2CUpdateTaskInfo", ns_name : "DeployServer", rl_name : "S2CUpdateTaskInfo", hash_code : 1566214727,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(-1479093282, "ALittle.UIEvent", {
name : "ALittle.UIEvent", ns_name : "ALittle", rl_name : "UIEvent", hash_code : -1479093282,
name_list : ["target"],
type_list : ["ALittle.DisplayObject"],
option_map : {}
})
ALittle.RegStruct(-1347278145, "ALittle.UIButtonEvent", {
name : "ALittle.UIButtonEvent", ns_name : "ALittle", rl_name : "UIButtonEvent", hash_code : -1347278145,
name_list : ["target","abs_x","abs_y","rel_x","rel_y","count","is_drag"],
type_list : ["ALittle.DisplayObject","double","double","double","double","int","bool"],
option_map : {}
})
ALittle.RegStruct(-1320965296, "DeployServer.C2SDeleteJob", {
name : "DeployServer.C2SDeleteJob", ns_name : "DeployServer", rl_name : "C2SDeleteJob", hash_code : -1320965296,
name_list : ["task_id","job_index"],
type_list : ["int","int"],
option_map : {}
})
ALittle.RegStruct(1254025721, "DeployServer.C2SDeleteBuild", {
name : "DeployServer.C2SDeleteBuild", ns_name : "DeployServer", rl_name : "C2SDeleteBuild", hash_code : 1254025721,
name_list : ["task_id","create_time","create_index"],
type_list : ["int","int","int"],
option_map : {}
})
ALittle.RegStruct(1232578034, "DeployServer.JobInfoDetail", {
name : "DeployServer.JobInfoDetail", ns_name : "DeployServer", rl_name : "JobInfoDetail", hash_code : 1232578034,
name_list : ["batch_dir","batch_cmd","batch_param","deepcopy_src","deepcopy_dst","deepcopy_ext","copyfile_src","copyfile_file","copyfile_dst","virtualkey_exepath","virtualkey_cmd","wait_p_exit_exe_path","wait_p_exit_max_time","createprocess_dir","createprocess_cmd","createprocess_param","killprocess_exe_path","r2r_resharper_exe_path","r2r_resharper_cache_path","r2r_resharper_output_path","r2r_resharper_sln_path","r2r_resharper_dotsettings_path","r2r_redmine_url","r2r_redmine_account","r2r_redmine_password","r2r_redmine_project_id","r2r_redmine_account_id","r2r_redmine_account_map","r2r_curl_exe_path","r2r_code_tool"],
type_list : ["string","string","string","string","string","string","string","List<string>","string","string","List<string>","List<string>","int","string","string","string","List<string>","string","string","string","string","string","string","string","string","string","string","Map<string,int>","string","string"],
option_map : {}
})
ALittle.RegStruct(1149037254, "DeployServer.C2SUpdateTaskInfo", {
name : "DeployServer.C2SUpdateTaskInfo", ns_name : "DeployServer", rl_name : "C2SUpdateTaskInfo", hash_code : 1149037254,
name_list : ["task_id","task_name","task_desc","web_hook","timer"],
type_list : ["int","string","string","List<string>","DeployServer.TaskTimer"],
option_map : {}
})
ALittle.RegStruct(-1004838094, "DeployServer.TaskTimer", {
name : "DeployServer.TaskTimer", ns_name : "DeployServer", rl_name : "TaskTimer", hash_code : -1004838094,
name_list : ["type","interval","year_point","month_point","day_point","hour_point","minute_point","second_point"],
type_list : ["int","int","int","int","int","int","int","int"],
option_map : {}
})
ALittle.RegStruct(958494922, "ALittle.UIChangedEvent", {
name : "ALittle.UIChangedEvent", ns_name : "ALittle", rl_name : "UIChangedEvent", hash_code : 958494922,
name_list : ["target"],
type_list : ["ALittle.DisplayObject"],
option_map : {}
})
ALittle.RegStruct(874244823, "DeployServer.S2CCopyJob", {
name : "DeployServer.S2CCopyJob", ns_name : "DeployServer", rl_name : "S2CCopyJob", hash_code : 874244823,
name_list : [],
type_list : [],
option_map : {}
})
ALittle.RegStruct(-641444818, "ALittle.UIRButtonDownEvent", {
name : "ALittle.UIRButtonDownEvent", ns_name : "ALittle", rl_name : "UIRButtonDownEvent", hash_code : -641444818,
name_list : ["target","abs_x","abs_y","rel_x","rel_y","count","is_drag"],
type_list : ["ALittle.DisplayObject","double","double","double","double","int","bool"],
option_map : {}
})
ALittle.RegStruct(629373421, "DeployClient.JobItemInfo", {
name : "DeployClient.JobItemInfo", ns_name : "DeployClient", rl_name : "JobItemInfo", hash_code : 629373421,
name_list : ["item","info","_button","_status"],
type_list : ["ALittle.DisplayObject","DeployServer.D_JobInfo","ALittle.DisplayObject","ALittle.DisplayObject"],
option_map : {}
})
ALittle.RegStruct(-616678126, "DeployServer.C2SMoveJob", {
name : "DeployServer.C2SMoveJob", ns_name : "DeployServer", rl_name : "C2SMoveJob", hash_code : -616678126,
name_list : ["task_id","job_index","target_index"],
type_list : ["int","int","int"],
option_map : {}
})

if (ALittle.DisplayLayout === undefined) throw new Error(" extends class:ALittle.DisplayLayout is undefined");
DeployClient.DPLUITaskDetail = JavaScript.Class(ALittle.DisplayLayout, {
	Ctor : function() {
		this._job_group = new Map();
		this._build_group = new Map();
	},
	TCtor : function() {
		let timer_group = new Map();
		this._task_timer_none_radio.group = timer_group;
		this._task_timer_interval_radio.group = timer_group;
		this._task_timer_point_radio.group = timer_group;
	},
	Init : function(task_item) {
		this._task_item = task_item;
		this.UpdateTaskInfo();
		this.RefreshJobInfo();
		this.RefreshBuildInfo();
	},
	Show : function() {
		this.visible = true;
		if (!this._save_button.disabled) {
			this.UpdateTaskInfo();
		}
	},
	Hide : function() {
		this.visible = false;
	},
	UpdateTaskInfo : function() {
		this._save_button.disabled = true;
		this._task_name_input.text = this._task_item.info.task_name;
		this._task_desc_input.text = this._task_item.info.task_desc;
		this._webhook_input.text = ALittle.String_Join(this._task_item.info.web_hook, "\n");
		let timer = this._task_item.info.timer;
		if (timer.type === undefined) {
			timer.type = 0;
		}
		if (timer.interval === undefined) {
			timer.interval = 0;
		}
		if (timer.year_point === undefined) {
			timer.year_point = 0;
		}
		if (timer.month_point === undefined) {
			timer.month_point = 0;
		}
		if (timer.day_point === undefined) {
			timer.day_point = 0;
		}
		if (timer.hour_point === undefined) {
			timer.hour_point = 0;
		}
		if (timer.minute_point === undefined) {
			timer.minute_point = 0;
		}
		if (timer.second_point === undefined) {
			timer.second_point = 0;
		}
		if (this._task_item.info.timer.type === 1) {
			this._task_timer_interval_radio.selected = true;
		} else if (this._task_item.info.timer.type === 2) {
			this._task_timer_point_radio.selected = true;
		} else {
			this._task_timer_none_radio.selected = true;
		}
		if (this._task_item.info.timer.interval % (3600 * 24) === 0) {
			this._task_timer_interval_input.text = ALittle.Math_Floor(this._task_item.info.timer.interval / (3600 * 24));
			this._task_timer_interval_unit_dropdown.text = "天";
		} else if (this._task_item.info.timer.interval % 3600 === 0) {
			this._task_timer_interval_input.text = ALittle.Math_Floor(this._task_item.info.timer.interval / 3600);
			this._task_timer_interval_unit_dropdown.text = "小时";
		} else if (this._task_item.info.timer.interval % 60 === 0) {
			this._task_timer_interval_input.text = ALittle.Math_Floor(this._task_item.info.timer.interval / 60);
			this._task_timer_interval_unit_dropdown.text = "分钟";
		} else {
			this._task_timer_interval_input.text = this._task_item.info.timer.interval;
			this._task_timer_interval_unit_dropdown.text = "秒";
		}
		this._task_timer_second_point_input.text = this._task_item.info.timer.second_point;
		this._task_timer_minute_point_input.text = this._task_item.info.timer.minute_point;
		this._task_timer_hour_point_input.text = this._task_item.info.timer.hour_point;
		this._task_timer_day_point_input.text = this._task_item.info.timer.day_point;
		this._task_timer_month_point_input.text = this._task_item.info.timer.month_point;
		this._task_timer_year_point_input.text = this._task_item.info.timer.year_point;
		let [result, text] = this.CheckTimerError();
		this._task_timer_error_text.text = text;
	},
	CheckTimerError : function() {
		if (this._task_timer_interval_radio.selected) {
			let interval = ALittle.Math_ToInt(this._task_timer_interval_input.text);
			if (interval === undefined || interval < 0) {
				return [false, "间隔时间错误：请填写大于0的间隔时间"];
			}
			return [true, "任务将在每" + interval + this._task_timer_interval_unit_dropdown.text + "自动执行一次"];
		}
		if (this._task_timer_point_radio.selected) {
			let hour_point = ALittle.Math_ToInt(this._task_timer_hour_point_input.text);
			if (hour_point === undefined || hour_point < 0 || hour_point > 23) {
				return [false, "定时时间错误：小时数取值范围在[0,23]"];
			}
			let minute_point = ALittle.Math_ToInt(this._task_timer_minute_point_input.text);
			if (minute_point === undefined || minute_point < 0 || minute_point > 59) {
				return [false, "定时时间错误：分钟数取值范围在[0,59]"];
			}
			let second_point = ALittle.Math_ToInt(this._task_timer_second_point_input.text);
			if (second_point === undefined || second_point < 0 || second_point > 59) {
				return [false, "定时时间错误：秒数取值范围在[0,59]"];
			}
			let day_text = hour_point + "时 " + minute_point + "分 " + second_point + "秒";
			let year_point = ALittle.Math_ToInt(this._task_timer_year_point_input.text);
			if (year_point !== undefined && year_point > 0) {
				let month_point = ALittle.Math_ToInt(this._task_timer_month_point_input.text);
				if (month_point === undefined || month_point < 1 || month_point > 12) {
					return [false, "定时时间错误：在确定" + year_point + "年的情况下，月份取值范围在[1,12]"];
				}
				let day_count = ALittle.Time_GetMonthDayCount(year_point, month_point);
				let day_point = ALittle.Math_ToInt(this._task_timer_day_point_input.text);
				if (day_point === undefined || day_point < 1 || day_point > day_count) {
					return [false, "定时时间错误：在确定" + year_point + "年" + month_point + "月的情况下，日期取值范围在[1," + day_count + "]"];
				}
				return [true, "定时间为:" + year_point + "年 " + month_point + "月 " + day_point + "日 " + day_text + " 执行一次"];
			}
			let cur_time = ALittle.Time_GetCurTime();
			let cur_year = ALittle.Time_GetYear(cur_time);
			let month_point = ALittle.Math_ToInt(this._task_timer_month_point_input.text);
			if (month_point !== undefined && month_point > 0) {
				let day_point = ALittle.Math_ToInt(this._task_timer_day_point_input.text);
				if (day_point === undefined || day_point < 1 || day_point > 31) {
					return [false, "定时时间错误：在确定" + month_point + "月的情况下，日期取值范围在[1,31]"];
				}
				if ((day_point === undefined || day_point < 1 || day_point > 31) && (month_point === 1 || month_point === 3 || month_point === 5 || month_point === 7 || month_point === 8 || month_point === 10 || month_point === 12)) {
					return [false, "定时时间错误：在确定" + month_point + "月的情况下，日期取值范围在[1,31]"];
				}
				if ((day_point === undefined || day_point < 1 || day_point > 30) && (month_point === 4 || month_point === 6 || month_point === 9 || month_point === 11)) {
					return [false, "定时时间错误：在确定" + month_point + "月的情况下，日期取值范围在[1,30]"];
				}
				if ((day_point === undefined || day_point < 1 || day_point > 29) && month_point === 2) {
					return [false, "定时时间错误：在确定" + month_point + "月的情况下，日期取值范围在[1,29]"];
				}
				let ext_text = "";
				if (day_point === 29 && month_point === 2) {
					ext_text = "(如果" + month_point + "月没有" + day_point + "日则跳过)";
				}
				return [true, "定时间为:每年" + month_point + "月 " + day_point + "日 " + day_text + " 执行一次" + ext_text];
			}
			let day_point = ALittle.Math_ToInt(this._task_timer_day_point_input.text);
			if (day_point !== undefined && day_point > 0) {
				if (day_point > 31) {
					return [false, "定时时间错误：日期取值范围最多在[1,31]"];
				}
				let ext_text = "";
				if (day_point >= 29) {
					ext_text = "(如果当月没有" + day_point + "日则跳过)";
				}
				return [true, "定时间为:每月 " + day_point + "日 " + day_text + " 执行一次" + ext_text];
			}
			return [true, "定时间为:每天 " + day_text + " 执行一次"];
		}
		return [true, "关闭定时"];
	},
	HandleUpdateErrorText : function(event) {
		let [result, text] = this.CheckTimerError();
		this._task_timer_error_text.text = text;
		this._save_button.disabled = false;
	},
	UpdateJobInfo : function(index) {
		let job_info = this._task_item.info.job_list[index - 1];
		if (job_info === undefined) {
			return;
		}
		let job_item = this._job_list.childs[index - 1]._user_data;
		job_item.info = job_info;
		this.RefreshJobItem(job_item);
	},
	RemoveJobItem : function(index) {
		let job_info = this._task_item.info.job_list[index - 1];
		if (job_info === undefined) {
			return;
		}
		this._job_list.SpliceChild(index, 1);
	},
	MoveJobItem : function(index, target_index) {
		let job_info = this._task_item.info.job_list[index - 1];
		if (job_info === undefined) {
			return;
		}
		this._job_list.SetChildIndex(this._job_list.GetChildByIndex(index), target_index);
	},
	RemoveBuildItem : function(create_time, create_index) {
		let ___OBJECT_1 = this._task_item.info.build_list;
		for (let index = 1; index <= ___OBJECT_1.length; ++index) {
			let build_info = ___OBJECT_1[index - 1];
			if (build_info === undefined) break;
			if (build_info.create_time === create_time && build_info.create_index === create_index) {
				this._build_list.SpliceChild(index, 1);
				break;
			}
		}
	},
	RefreshJobInfo : function() {
		this._job_list.RemoveAllChild();
		let ___OBJECT_2 = this._task_item.info.job_list;
		for (let index = 1; index <= ___OBJECT_2.length; ++index) {
			let job_info = ___OBJECT_2[index - 1];
			if (job_info === undefined) break;
			this.AddJobItem(undefined, job_info);
		}
	},
	RefreshBuildInfo : function() {
		this._build_list.RemoveAllChild();
		let ___OBJECT_3 = this._task_item.info.build_list;
		for (let index = 1; index <= ___OBJECT_3.length; ++index) {
			let build_info = ___OBJECT_3[index - 1];
			if (build_info === undefined) break;
			this.AddBuildItem(build_info);
		}
	},
	HandleTaskBaseChanged : function(event) {
		this._save_button.disabled = false;
	},
	HandleTaskStart : function() {
		let ___OBJECT_4 = this._job_list.childs;
		for (let index = 1; index <= ___OBJECT_4.length; ++index) {
			let child = ___OBJECT_4[index - 1];
			if (child === undefined) break;
			let job_item = child._user_data;
			job_item._status.text = "-";
		}
	},
	HandleTaskSaveClick : async function(event) {
		let msg_client = DeployClient.g_DPLWebLoginManager.msg_client;
		if (msg_client === undefined || !msg_client.IsConnected()) {
			g_AUITool.ShowNotice("提示", "当前还未连接成功!");
			return;
		}
		if (this._task_name_input.text === "") {
			g_AUITool.ShowNotice("提示", "任务名称不能为空!");
			return;
		}
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.task_name = this._task_name_input.text;
		msg.task_desc = this._task_desc_input.text;
		msg.web_hook = ALittle.String_SplitSepList(this._webhook_input.text, ["\r", "\n"]);
		msg.timer = {};
		if (this._task_timer_interval_radio.selected) {
			msg.timer.type = 1;
		} else if (this._task_timer_point_radio.selected) {
			msg.timer.type = 2;
		} else {
			msg.timer.type = 0;
		}
		msg.timer.interval = ALittle.Math_ToInt(this._task_timer_interval_input.text);
		if (msg.timer.interval !== undefined) {
			if (this._task_timer_interval_unit_dropdown.text === "天") {
				msg.timer.interval = msg.timer.interval * (3600 * 24);
			} else if (this._task_timer_interval_unit_dropdown.text === "小时") {
				msg.timer.interval = msg.timer.interval * (3600);
			} else if (this._task_timer_interval_unit_dropdown.text === "分钟") {
				msg.timer.interval = msg.timer.interval * (60);
			}
		}
		msg.timer.second_point = ALittle.Math_ToInt(this._task_timer_second_point_input.text);
		msg.timer.minute_point = ALittle.Math_ToInt(this._task_timer_minute_point_input.text);
		msg.timer.hour_point = ALittle.Math_ToInt(this._task_timer_hour_point_input.text);
		msg.timer.day_point = ALittle.Math_ToInt(this._task_timer_day_point_input.text);
		msg.timer.month_point = ALittle.Math_ToInt(this._task_timer_month_point_input.text);
		msg.timer.year_point = ALittle.Math_ToInt(this._task_timer_year_point_input.text);
		let [error] = await ALittle.IMsgCommon.InvokeRPC(1149037254, msg_client, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
		}
	},
	HandleNewJobClick : function(event) {
		this.ShowCreateMenu(undefined);
	},
	ShowCreateMenu : function(job_index) {
		let menu = ALittle.NewObject(AUIPlugin.AUIRightMenu);
		menu.AddItem("批处理", this.HandleNewCommonJob.bind(this, "batch_job_dialog", job_index));
		menu.AddItem("复制目录", this.HandleNewCommonJob.bind(this, "deepcopy_job_dialog", job_index));
		menu.AddItem("复制文件", this.HandleNewCommonJob.bind(this, "copyfile_job_dialog", job_index));
		menu.AddItem("发送命令", this.HandleNewCommonJob.bind(this, "sendvirtualkey_job_dialog", job_index));
		menu.AddItem("等待进程退出", this.HandleNewCommonJob.bind(this, "waitprocessexit_job_dialog", job_index));
		menu.AddItem("创建进程", this.HandleNewCommonJob.bind(this, "createprocess_job_dialog", job_index));
		menu.AddItem("杀死进程", this.HandleNewCommonJob.bind(this, "killprocess_job_dialog", job_index));
		menu.AddItem("代码检查", this.HandleNewCommonJob.bind(this, "resharper_redmine_job_dialog", job_index));
		menu.Show();
	},
	HandleStartTaskClick : function(event) {
		DeployClient.g_DPLCenter.center.task_center.HandleStartTask(this._task_item);
	},
	HandleNewCommonJob : function(ui, job_index) {
		let dialog = DeployClient.g_Control.CreateControl(ui);
		dialog.Show(this._task_item.info.task_id, job_index, undefined);
	},
	AddJobItem : function(job_index, job_info) {
		let job_item = {};
		job_item.info = job_info;
		job_item.item = DeployClient.g_Control.CreateControl("dpl_job_item", job_item);
		job_item.item._user_data = job_item;
		job_item._button._user_data = job_item;
		job_item._button.group = this._job_group;
		job_item._button.AddEventListener(___all_struct.get(-641444818), this, this.HandleJobRButtonDown);
		this._job_list.AddChild(job_item.item, job_index);
		this.RefreshJobItem(job_item);
	},
	AddBuildItem : function(build_info) {
		let build_item = {};
		build_item.info = build_info;
		build_item.item = DeployClient.g_Control.CreateControl("dpl_build_item", build_item);
		build_item.item._user_data = build_item;
		build_item._button._user_data = build_item;
		build_item._button.group = this._build_group;
		build_item._button.AddEventListener(___all_struct.get(-641444818), this, this.HandleBuildRButtonDown);
		build_item._button.AddEventListener(___all_struct.get(958494922), this, this.HandlePreSeeBuild);
		build_item._download_button.AddEventListener(___all_struct.get(1800966813), this, this.HandleDownloadBuild);
		build_item._download_button._user_data = build_item;
		this._build_list.AddChild(build_item.item);
		this._build_list.ScrollToBottom();
		build_item._button.text = ALittle.Time_GetCurDate(build_info.create_time);
	},
	RefreshJobItem : function(job_item) {
		if (job_item.info.job_type === 1) {
			job_item._button.text = "[批处理] " + job_item.info.job_name + ":" + job_item.info.detail.batch_cmd;
		} else if (job_item.info.job_type === 2) {
			job_item._button.text = "[复制目录] " + job_item.info.job_name + ":" + job_item.info.detail.deepcopy_src + "->" + job_item.info.detail.deepcopy_dst;
		} else if (job_item.info.job_type === 3) {
			job_item._button.text = "[复制文件] " + job_item.info.job_name + ":" + job_item.info.detail.copyfile_src + "->" + job_item.info.detail.copyfile_dst;
		} else if (job_item.info.job_type === 4) {
			job_item._button.text = "[发送命令] " + job_item.info.job_name + ":" + job_item.info.detail.virtualkey_exepath;
		} else if (job_item.info.job_type === 5) {
			job_item._button.text = "[等待进程退出] " + job_item.info.job_name;
		} else if (job_item.info.job_type === 6) {
			job_item._button.text = "[创建进程] " + job_item.info.job_name + ":" + job_item.info.detail.createprocess_cmd;
		} else if (job_item.info.job_type === 7) {
			job_item._button.text = "[杀死进程] " + job_item.info.job_name;
		} else if (job_item.info.job_type === 8) {
			job_item._button.text = "[代码检查] " + job_item.info.job_name + ":" + job_item.info.detail.r2r_resharper_sln_path;
		}
		if (this._task_item.info.status === 0) {
			job_item._status.text = "";
		} else {
			if (job_item.info.status === 0) {
				job_item._status.text = "-";
			} else if (job_item.info.status === 1) {
				job_item._status.text = ALittle.Math_Floor(job_item.info.progress * 10000) / 100 + "%";
			} else if (job_item.info.status === 2) {
				job_item._status.text = "完成";
			} else if (job_item.info.status === 3) {
				job_item._status.text = "失败";
			}
		}
	},
	HandleJobRButtonDown : function(event) {
		let job_item = event.target._user_data;
		let job_index = this._job_list.GetChildIndex(job_item.item);
		let menu = ALittle.NewObject(AUIPlugin.AUIRightMenu);
		menu.AddItem("修改", this.HandleModifyJob.bind(this, job_item, job_index));
		menu.AddItem("上移", this.HandleMoveJob.bind(this, job_item, job_index, job_index - 1));
		menu.AddItem("下移", this.HandleMoveJob.bind(this, job_item, job_index, job_index + 1));
		menu.AddItem("复制", this.HandleCopyJob.bind(this, job_item, job_index));
		menu.AddItem("新建", this.ShowCreateMenu.bind(this, job_index + 1));
		menu.AddItem("删除", this.HandleDeleteJob.bind(this, job_item, job_index));
		menu.Show();
	},
	HandleBuildRButtonDown : function(event) {
		let build_item = event.target._user_data;
		let menu = ALittle.NewObject(AUIPlugin.AUIRightMenu);
		menu.AddItem("删除", this.HandleDeleteBuild.bind(this, build_item));
		menu.Show();
	},
	HandlePreSeeBuild : async function(event) {
		let build_item = event.target._user_data;
		let build_index = this._build_list.GetChildIndex(build_item.item);
		DeployClient.g_DPLCenter.center.task_center._build_edit.text = "";
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.create_time = build_item.info.create_time;
		msg.create_index = build_item.info.create_index;
		let sender = DeployClient.g_DPLCenter.CreateHttpSender();
		let [error, rsp] = await ALittle.IHttpSender.Invoke("DeployServer.QPreSeeBuild", sender, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
			return;
		}
		DeployClient.g_DPLCenter.center.task_center._build_edit.text = ALittle.String_Join(rsp.log_list, "\r\n");
	},
	HandleDownloadBuild : async function(event) {
		if (event.path === undefined || event.path === "") {
			return;
		}
		let build_item = event.target._user_data;
		let build_index = this._build_list.GetChildIndex(build_item.item);
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.create_time = build_item.info.create_time;
		msg.create_index = build_item.info.create_index;
		let sender = DeployClient.g_DPLCenter.CreateHttpFileSender(event.path + "/" + ALittle.Time_GetCurDate(build_item.info.create_time) + ".log");
		let [error] = await ALittle.IHttpFileSender.InvokeDownload("DeployServer.QDownloadBuild", sender, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
		}
	},
	HandleModifyJob : function(info, index) {
		let ui = undefined;
		if (info.info.job_type === 1) {
			ui = "batch_job_dialog";
		} else if (info.info.job_type === 2) {
			ui = "deepcopy_job_dialog";
		} else if (info.info.job_type === 3) {
			ui = "copyfile_job_dialog";
		} else if (info.info.job_type === 4) {
			ui = "sendvirtualkey_job_dialog";
		} else if (info.info.job_type === 5) {
			ui = "waitprocessexit_job_dialog";
		} else if (info.info.job_type === 6) {
			ui = "createprocess_job_dialog";
		} else if (info.info.job_type === 7) {
			ui = "killprocess_job_dialog";
		} else if (info.info.job_type === 8) {
			ui = "resharper_redmine_job_dialog";
		}
		if (ui !== undefined) {
			let dialog = DeployClient.g_Control.CreateControl(ui);
			dialog.Show(this._task_item.info.task_id, index, info.info);
		}
	},
	HandleMoveJob : async function(info, index, new_index) {
		let msg_client = DeployClient.g_DPLWebLoginManager.msg_client;
		if (msg_client === undefined || !msg_client.IsConnected()) {
			g_AUITool.ShowNotice("提示", "当前还未连接成功!");
			return;
		}
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.job_index = index;
		msg.target_index = new_index;
		let [error] = await ALittle.IMsgCommon.InvokeRPC(-616678126, msg_client, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
		}
	},
	HandleCopyJob : async function(info, index) {
		let msg_client = DeployClient.g_DPLWebLoginManager.msg_client;
		if (msg_client === undefined || !msg_client.IsConnected()) {
			g_AUITool.ShowNotice("提示", "当前还未连接成功!");
			return;
		}
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.job_index = index;
		let [error] = await ALittle.IMsgCommon.InvokeRPC(-2031251578, msg_client, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
		}
	},
	HandleDeleteJob : async function(info, index) {
		let msg_client = DeployClient.g_DPLWebLoginManager.msg_client;
		if (msg_client === undefined || !msg_client.IsConnected()) {
			g_AUITool.ShowNotice("提示", "当前还未连接成功!");
			return;
		}
		let result = await g_AUITool.DeleteNotice("删除", "确定要删除该任务吗?");
		if (result !== "YES") {
			return;
		}
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.job_index = index;
		let [error] = await ALittle.IMsgCommon.InvokeRPC(-1320965296, msg_client, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
		}
	},
	HandleDeleteBuild : async function(info) {
		let msg_client = DeployClient.g_DPLWebLoginManager.msg_client;
		if (msg_client === undefined || !msg_client.IsConnected()) {
			g_AUITool.ShowNotice("提示", "当前还未连接成功!");
			return;
		}
		let result = await g_AUITool.DeleteNotice("删除", "确定要删除该构建信息吗?");
		if (result !== "YES") {
			return;
		}
		let msg = {};
		msg.task_id = this._task_item.info.task_id;
		msg.create_time = info.info.create_time;
		msg.create_index = info.info.create_index;
		let [error] = await ALittle.IMsgCommon.InvokeRPC(1254025721, msg_client, msg);
		if (error !== undefined) {
			g_AUITool.ShowNotice("提示", error);
		}
	},
}, "DeployClient.DPLUITaskDetail");

}