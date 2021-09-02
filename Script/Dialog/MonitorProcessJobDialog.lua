-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs


assert(DeployClient.CommonJobDialog, " extends class:DeployClient.CommonJobDialog is nil")
DeployClient.MonitorProcessJobDialog = Lua.Class(DeployClient.CommonJobDialog, "DeployClient.MonitorProcessJobDialog")

function DeployClient.MonitorProcessJobDialog.__getter:type()
	return 10
end

function DeployClient.MonitorProcessJobDialog:ShowDetail(detail)
	if detail ~= nil then
		self._exe_path.text = detail.monitorprocess_exe_path
		self._auto_start_cbtn.selected = detail.monitorprocess_auto_start
	else
		self._exe_path.text = ""
		self._auto_start_cbtn.selected = false
	end
end

function DeployClient.MonitorProcessJobDialog:GetDetail()
	local detail = {}
	detail.monitorprocess_exe_path = self._exe_path.text
	detail.monitorprocess_auto_start = self._auto_start_cbtn.selected
	return detail
end

function DeployClient.MonitorProcessJobDialog:HandleExeBrowserClick(event)
	self._exe_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.MonitorProcessJobDialog.HandleExeBrowserClick = Lua.CoWrap(DeployClient.MonitorProcessJobDialog.HandleExeBrowserClick)

end