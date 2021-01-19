-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs

ALittle.RegStruct(839664979, "ALittle.PathAttribute", {
name = "ALittle.PathAttribute", ns_name = "ALittle", rl_name = "PathAttribute", hash_code = 839664979,
name_list = {"directory","size"},
type_list = {"bool","int"},
option_map = {}
})
ALittle.RegStruct(-617554749, "DeployServer.AShowPathInfo", {
name = "DeployServer.AShowPathInfo", ns_name = "DeployServer", rl_name = "AShowPathInfo", hash_code = -617554749,
name_list = {"info_map"},
type_list = {"Map<string,ALittle.PathAttribute>"},
option_map = {}
})
ALittle.RegStruct(-505877607, "DeployServer.QShowPathInfo", {
name = "DeployServer.QShowPathInfo", ns_name = "DeployServer", rl_name = "QShowPathInfo", hash_code = -505877607,
name_list = {"path"},
type_list = {"string"},
option_map = {}
})

assert(AUIPlugin.AUIFileRemoteSelectLayout, " extends class:AUIPlugin.AUIFileRemoteSelectLayout is nil")
DeployClient.FileRemoteSelectLayout = Lua.Class(AUIPlugin.AUIFileRemoteSelectLayout, "DeployClient.FileRemoteSelectLayout")

function DeployClient.FileRemoteSelectLayout:GetNameListByDir(path)
	local ___COROUTINE = coroutine.running()
	local index = ALittle.String_Find(path, ":")
	if index ~= nil and index == ALittle.String_Len(path) then
		path = path .. "\\"
	end
	local msg = {}
	msg.path = path
	local error, result = ALittle.IMsgCommon.InvokeRPC(-505877607, DeployClient.g_DPLWebLoginManager.msg_client, msg)
	if error ~= nil then
		return {}
	end
	return result.info_map
end

end