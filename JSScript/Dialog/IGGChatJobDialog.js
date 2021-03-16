{
if (typeof DeployClient === "undefined") window.DeployClient = {};


if (DeployClient.CommonJobDialog === undefined) throw new Error(" extends class:DeployClient.CommonJobDialog is undefined");
DeployClient.IGGChatJobDialog = JavaScript.Class(DeployClient.CommonJobDialog, {
	get type() {
		return 9;
	},
	ShowDetail : function(detail) {
		if (detail !== undefined) {
			this._chat_room_id.text = detail.igg_chat_room_id;
			this._chat_title.text = detail.igg_chat_title;
			this._chat_content.text = detail.igg_chat_content;
		} else {
			this._chat_room_id.text = "";
			this._chat_title.text = "";
			this._chat_content.text = "";
		}
	},
	GetDetail : function() {
		let detail = {};
		detail.igg_chat_room_id = this._chat_room_id.text;
		detail.igg_chat_title = this._chat_title.text;
		detail.igg_chat_content = this._chat_content.text;
		return detail;
	},
}, "DeployClient.IGGChatJobDialog");

}