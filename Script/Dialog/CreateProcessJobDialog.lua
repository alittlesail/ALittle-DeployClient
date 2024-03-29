-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs


assert(DeployClient.CommonJobDialog, " extends class:DeployClient.CommonJobDialog is nil")
DeployClient.CreateProcessJobDialog = Lua.Class(DeployClient.CommonJobDialog, "DeployClient.CreateProcessJobDialog")

function DeployClient.CreateProcessJobDialog.__getter:type()
	return 6
end

function DeployClient.CreateProcessJobDialog:ShowDetail(detail)
	if detail ~= nil then
		self._exe_path.text = ALittle.String_Join(detail.createprocess_exe_path, "\n")
	else
		self._exe_path.text = ""
	end
end

function DeployClient.CreateProcessJobDialog:GetDetail()
	local detail = {}
	detail.createprocess_exe_path = ALittle.String_SplitSepList(self._exe_path.text, {"\r", "\n"})
	return detail
end

end