-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs


assert(DeployClient.CommonJobDialog, " extends class:DeployClient.CommonJobDialog is nil")
DeployClient.KillProcessJobDialog = Lua.Class(DeployClient.CommonJobDialog, "DeployClient.KillProcessJobDialog")

function DeployClient.KillProcessJobDialog.__getter:type()
	return 7
end

function DeployClient.KillProcessJobDialog:ShowDetail(detail)
	if detail ~= nil then
		self._exe_path.text = ALittle.String_Join(detail.killprocess_exe_path, "\n")
		self._delay_time.text = detail.killprocess_delay_time
	else
		self._exe_path.text = ""
		self._delay_time.text = "0"
	end
end

function DeployClient.KillProcessJobDialog:GetDetail()
	local detail = {}
	detail.killprocess_exe_path = ALittle.String_SplitSepList(self._exe_path.text, {"\r", "\n"})
	detail.killprocess_delay_time = ALittle.Math_ToIntOrZero(self._delay_time.text)
	return detail
end

end