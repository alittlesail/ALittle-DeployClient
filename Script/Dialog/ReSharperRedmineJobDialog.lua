-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs


assert(DeployClient.CommonJobDialog, " extends class:DeployClient.CommonJobDialog is nil")
DeployClient.ReSharperRedmineJobDialog = Lua.Class(DeployClient.CommonJobDialog, "DeployClient.ReSharperRedmineJobDialog")

function DeployClient.ReSharperRedmineJobDialog.__getter:type()
	return 1
end

function DeployClient.ReSharperRedmineJobDialog:ShowDetail(detail)
	if detail ~= nil then
		self._resharper_exe_path.text = detail.r2r_resharper_exe_path
		self._resharper_cache_path.text = detail.r2r_resharper_cache_path
		self._resharper_output_path.text = detail.r2r_resharper_output_path
		self._resharper_sln_path.text = detail.r2r_resharper_sln_path
		self._redmine_url.text = detail.r2r_redmine_url
		self._redmine_account.text = detail.r2r_redmine_account
		self._redmine_password.text = detail.r2r_redmine_password
	else
		self._resharper_exe_path.text = ""
		self._resharper_cache_path.text = ""
		self._resharper_output_path.text = ""
		self._resharper_sln_path.text = ""
		self._redmine_url.text = ""
		self._redmine_account.text = ""
		self._redmine_password.text = ""
	end
end

function DeployClient.ReSharperRedmineJobDialog:GetDetail()
	local detail = {}
	detail.r2r_resharper_exe_path = self._resharper_exe_path.text
	detail.r2r_resharper_cache_path = self._resharper_cache_path.text
	detail.r2r_resharper_output_path = self._resharper_output_path.text
	detail.r2r_resharper_sln_path = self._resharper_sln_path.text
	detail.r2r_redmine_url = self._redmine_url.text
	detail.r2r_redmine_account = self._redmine_account.text
	detail.r2r_redmine_password = self._redmine_password.text
	return detail
end

function DeployClient.ReSharperRedmineJobDialog:HandleExeBrowserClick(event)
	self._resharper_exe_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.ReSharperRedmineJobDialog.HandleExeBrowserClick = Lua.CoWrap(DeployClient.ReSharperRedmineJobDialog.HandleExeBrowserClick)

function DeployClient.ReSharperRedmineJobDialog:HandleCacheBrowserClick(event)
	self._resharper_cache_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.ReSharperRedmineJobDialog.HandleCacheBrowserClick = Lua.CoWrap(DeployClient.ReSharperRedmineJobDialog.HandleCacheBrowserClick)

function DeployClient.ReSharperRedmineJobDialog:HandleOutputBrowserClick(event)
	self._resharper_output_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.ReSharperRedmineJobDialog.HandleOutputBrowserClick = Lua.CoWrap(DeployClient.ReSharperRedmineJobDialog.HandleOutputBrowserClick)

function DeployClient.ReSharperRedmineJobDialog:HandleSlnBrowserClick(event)
	self._resharper_sln_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.ReSharperRedmineJobDialog.HandleSlnBrowserClick = Lua.CoWrap(DeployClient.ReSharperRedmineJobDialog.HandleSlnBrowserClick)

end