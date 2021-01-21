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
	return 8
end

function DeployClient.ReSharperRedmineJobDialog:ShowDetail(detail)
	if detail ~= nil then
		self._resharper_exe_path.text = detail.r2r_resharper_exe_path
		self._resharper_cache_path.text = detail.r2r_resharper_cache_path
		self._resharper_output_path.text = detail.r2r_resharper_output_path
		self._resharper_sln_path.text = detail.r2r_resharper_sln_path
		self._resharper_dotsettings_path.text = detail.r2r_resharper_dotsettings_path
		self._redmine_url.text = detail.r2r_redmine_url
		self._redmine_account.text = detail.r2r_redmine_account
		self._redmine_password.text = detail.r2r_redmine_password
		self._redmine_project_id.text = detail.r2r_redmine_project_id
		self._redmine_account_id.text = detail.r2r_redmine_account_id
		self._curl_exe_path.text = detail.r2r_curl_exe_path
		local list = {}
		for account, num in ___pairs(detail.r2r_redmine_account_map) do
			ALittle.List_Push(list, num .. ":" .. account)
		end
		self._redmine_account_map.text = ALittle.String_Join(list, ";")
		if detail.r2r_code_tool == "svn" then
			self._code_tool.text = "svn"
		elseif detail.r2r_code_tool == "git" then
			self._code_tool.text = "git"
		else
			self._code_tool.text = ""
		end
	else
		self._resharper_exe_path.text = ""
		self._resharper_cache_path.text = ""
		self._resharper_output_path.text = ""
		self._resharper_sln_path.text = ""
		self._resharper_dotsettings_path.text = ""
		self._redmine_url.text = ""
		self._redmine_account.text = ""
		self._redmine_password.text = ""
		self._redmine_project_id.text = ""
		self._redmine_account_id.text = ""
		self._curl_exe_path.text = ""
		self._redmine_account_map.text = ""
		self._code_tool.text = ""
	end
end

function DeployClient.ReSharperRedmineJobDialog:GetDetail()
	local detail = {}
	detail.r2r_resharper_exe_path = self._resharper_exe_path.text
	detail.r2r_resharper_cache_path = self._resharper_cache_path.text
	detail.r2r_resharper_output_path = self._resharper_output_path.text
	detail.r2r_resharper_sln_path = self._resharper_sln_path.text
	detail.r2r_resharper_dotsettings_path = self._resharper_dotsettings_path.text
	detail.r2r_redmine_url = self._redmine_url.text
	detail.r2r_redmine_account = self._redmine_account.text
	detail.r2r_redmine_password = self._redmine_password.text
	detail.r2r_redmine_project_id = self._redmine_project_id.text
	detail.r2r_redmine_account_id = self._redmine_account_id.text
	detail.r2r_curl_exe_path = self._curl_exe_path.text
	detail.r2r_redmine_account_map = {}
	local list = ALittle.String_Split(self._redmine_account_map.text, ";")
	for index, info in ___ipairs(list) do
		local split_list = ALittle.String_Split(info, ":")
		if ALittle.List_Len(split_list) == 2 then
			local num = ALittle.Math_ToInt(split_list[2])
			if num ~= nil then
				detail.r2r_redmine_account_map[split_list[1]] = num
			end
		end
	end
	if self._code_tool.text == "svn" then
		detail.r2r_code_tool = "svn"
	elseif self._code_tool.text == "git" then
		detail.r2r_code_tool = "git"
	else
		detail.r2r_code_tool = ""
	end
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

function DeployClient.ReSharperRedmineJobDialog:HandleCurlBrowserClick(event)
	self._curl_exe_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.ReSharperRedmineJobDialog.HandleCurlBrowserClick = Lua.CoWrap(DeployClient.ReSharperRedmineJobDialog.HandleCurlBrowserClick)

function DeployClient.ReSharperRedmineJobDialog:HandleDotSettingsBrowserClick(event)
	self._resharper_dotsettings_path.text = DeployClient.g_FileRemoteSelectDialog:ShowSelect()
end
DeployClient.ReSharperRedmineJobDialog.HandleDotSettingsBrowserClick = Lua.CoWrap(DeployClient.ReSharperRedmineJobDialog.HandleDotSettingsBrowserClick)

end