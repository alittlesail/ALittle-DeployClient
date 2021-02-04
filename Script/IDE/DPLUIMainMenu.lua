-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs


assert(ALittle.Linear, " extends class:ALittle.Linear is nil")
DeployClient.DPLUIMainMenu = Lua.Class(ALittle.Linear, "DeployClient.DPLUIMainMenu")

function DeployClient.DPLUIMainMenu:TCtor()
	local group = {}
	for index, child in ___ipairs(self._childs) do
		child.group = group
	end
	self._version_manager = AUIPlugin.AUIVersionManager("www.alittleide.com", 1100, "alittle", "ALittleDeploy")
	if not DeployClient.g_Control.crypt_mode then
		self._version_manager:CheckVersionUpdate()
	end
end

function DeployClient.DPLUIMainMenu:Shutdown()
	self._version_manager:Shutdown()
end

function DeployClient.DPLUIMainMenu:HandleMenuHide(button)
	button.selected = false
end

function DeployClient.DPLUIMainMenu:HandleHelpMenuClick(event)
	local menu = AUIPlugin.AUIRightMenu()
	menu:AddItem("版本检查", Lua.Bind(self._version_manager.ShowDialog, self._version_manager))
	menu:Show(event.target, Lua.Bind(self.HandleMenuHide, self, event.target))
end

function DeployClient.DPLUIMainMenu:HandleSettingMenuClick(event)
	self:ShowSettingDialog()
end

function DeployClient.DPLUIMainMenu:TryShowSettingDialog()
	if DeployClient.g_DPLConfig:GetString("setting_ip", "") == "" then
		self:ShowSettingDialog()
	end
end

function DeployClient.DPLUIMainMenu:ShowSettingDialog()
	if self._setting_dialog == nil then
		self._setting_dialog = DeployClient.g_Control:CreateControl("setting_dialog", self)
		A_LayerManager:AddToModal(self._setting_dialog)
		self._setting_ip.text = DeployClient.g_DPLConfig:GetString("setting_ip", "")
	end
	self._setting_dialog.visible = true
end

function DeployClient.DPLUIMainMenu:HandleSettingComfirmClick(event)
	self._setting_dialog.visible = false
	local ip = self._setting_ip.text
	if DeployClient.g_DPLConfig:GetString("setting_ip", "") == ip then
		return
	end
	DeployClient.g_DPLConfig:SetConfig("setting_ip", ip)
	DeployClient.g_DPLWebLoginManager:Shutdown()
	DeployClient.g_DPLWebLoginManager:Setup(ip, 1801, nil, DeployClient.g_DPLConfig)
end

function DeployClient.DPLUIMainMenu:HandleSettingCancelClick(event)
	self._setting_dialog.visible = false
end

end