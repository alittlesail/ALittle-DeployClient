-- ALittle Generate Lua And Do Not Edit This Line!
do
if _G.DeployClient == nil then _G.DeployClient = {} end
local DeployClient = DeployClient
local Lua = Lua
local ALittle = ALittle
local ___pairs = pairs
local ___ipairs = ipairs


assert(DeployClient.CommonJobDialog, " extends class:DeployClient.CommonJobDialog is nil")
DeployClient.IGGChatJobDialog = Lua.Class(DeployClient.CommonJobDialog, "DeployClient.IGGChatJobDialog")

function DeployClient.IGGChatJobDialog.__getter:type()
	return 9
end

function DeployClient.IGGChatJobDialog:ShowDetail(detail)
	if detail ~= nil then
		self._chat_room_id.text = detail.igg_chat_room_id
		self._chat_title.text = detail.igg_chat_title
		self._chat_content.text = detail.igg_chat_content
	else
		self._chat_room_id.text = ""
		self._chat_title.text = ""
		self._chat_content.text = ""
	end
end

function DeployClient.IGGChatJobDialog:GetDetail()
	local detail = {}
	detail.igg_chat_room_id = self._chat_room_id.text
	detail.igg_chat_title = self._chat_title.text
	detail.igg_chat_content = self._chat_content.text
	return detail
end

end