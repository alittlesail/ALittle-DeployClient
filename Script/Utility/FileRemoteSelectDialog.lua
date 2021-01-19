-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs

ALittle.RegStruct(-1210770538, "DeployServer.AShowCurPath", {
name = "DeployServer.AShowCurPath", ns_name = "DeployServer", rl_name = "AShowCurPath", hash_code = -1210770538,
name_list = {"path"},
type_list = {"string"},
option_map = {}
})
ALittle.RegStruct(1018450360, "DeployServer.QShowCurPath", {
name = "DeployServer.QShowCurPath", ns_name = "DeployServer", rl_name = "QShowCurPath", hash_code = 1018450360,
name_list = {},
type_list = {},
option_map = {}
})

assert(ALittle.EventDispatcher, " extends class:ALittle.EventDispatcher is nil")
DeployClient.FileRemoteSelectDialog = Lua.Class(ALittle.EventDispatcher, "DeployClient.FileRemoteSelectDialog")

function DeployClient.FileRemoteSelectDialog:Shutdown()
	if self._layout ~= nil then
		self._layout:Release()
	end
	if self._dialog ~= nil then
		A_LayerManager:RemoveFromModal(self._dialog)
		self._dialog = nil
	end
end

function DeployClient.FileRemoteSelectDialog:HideDialog()
	if self._layout ~= nil then
		self._layout:Release()
	end
	if self._dialog ~= nil then
		self._dialog.visible = false
	end
end

function DeployClient.FileRemoteSelectDialog:ShowDialog()
	if self._layout ~= nil then
		self._layout:Release()
	end
	self:CreateDialog()
	self._dialog.visible = true
end

function DeployClient.FileRemoteSelectDialog:CreateDialog()
	if self._dialog == nil then
		self._dialog = DeployClient.g_Control:CreateControl("file_remote_select_dialog", self)
		A_LayerManager:AddToModal(self._dialog)
		self._dialog.close_callback = Lua.Bind(self.HandleDialogClose, self)
		self._layout:Init(nil)
	end
end

function DeployClient.FileRemoteSelectDialog.__getter:base_path()
	if self._layout == nil then
		return nil
	end
	return self._layout.base_path
end

function DeployClient.FileRemoteSelectDialog:ShowSelect()
	local ___COROUTINE = coroutine.running()
	local msg = {}
	local error, rsp = ALittle.IMsgCommon.InvokeRPC(1018450360, DeployClient.g_DPLWebLoginManager.msg_client, msg)
	if error == nil then
		local index = ALittle.String_Find(rsp.path, ":")
		if index ~= nil then
			self:SetBasePath(ALittle.String_Sub(rsp.path, 1, index))
		else
			self:SetBasePath(rsp.path)
		end
	end
	self:ShowDialog()
	local result = self._layout:ShowSelect()
	self._dialog.visible = false
	return result
end

function DeployClient.FileRemoteSelectDialog:HandleDialogClose()
	if self._layout ~= nil then
		self._layout:Release()
	end
	return true
end

function DeployClient.FileRemoteSelectDialog:SetPath(base_path, rel_path)
	self:CreateDialog()
	return self._layout:SetPath(base_path, rel_path)
end

function DeployClient.FileRemoteSelectDialog:SetBasePath(base_path)
	if self.base_path == base_path then
		return true
	end
	return self:SetPath(base_path, "")
end

function DeployClient.FileRemoteSelectDialog:Refresh()
	if self._layout ~= nil then
		self._layout:Refresh()
	end
end

DeployClient.g_FileRemoteSelectDialog = DeployClient.FileRemoteSelectDialog()
end