{
if (typeof DeployClient === "undefined") window.DeployClient = {};

ALittle.RegStruct(839664979, "ALittle.PathAttribute", {
name : "ALittle.PathAttribute", ns_name : "ALittle", rl_name : "PathAttribute", hash_code : 839664979,
name_list : ["directory","size"],
type_list : ["bool","int"],
option_map : {}
})
ALittle.RegStruct(-617554749, "DeployServer.AShowPathInfo", {
name : "DeployServer.AShowPathInfo", ns_name : "DeployServer", rl_name : "AShowPathInfo", hash_code : -617554749,
name_list : ["info_map"],
type_list : ["Map<string,ALittle.PathAttribute>"],
option_map : {}
})
ALittle.RegStruct(-505877607, "DeployServer.QShowPathInfo", {
name : "DeployServer.QShowPathInfo", ns_name : "DeployServer", rl_name : "QShowPathInfo", hash_code : -505877607,
name_list : ["path"],
type_list : ["string"],
option_map : {}
})

if (AUIPlugin.AUIFileRemoteSelectLayout === undefined) throw new Error(" extends class:AUIPlugin.AUIFileRemoteSelectLayout is undefined");
DeployClient.FileRemoteSelectLayout = JavaScript.Class(AUIPlugin.AUIFileRemoteSelectLayout, {
	GetNameListByDir : function(path) {
		return new Promise((async function(___COROUTINE, ___) {
			let msg = {};
			msg.path = path;
			let [error, result] = await ALittle.IMsgCommon.InvokeRPC(-505877607, DeployClient.g_DPLWebLoginManager.msg_client, msg);
			if (error !== undefined) {
				___COROUTINE({}); return;
			}
			___COROUTINE(result.info_map); return;
		}).bind(this));
	},
}, "DeployClient.FileRemoteSelectLayout");

}