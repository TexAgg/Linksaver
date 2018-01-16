import {LinkSaver} from "./linksaver";

const MENU_ITEM_ID = "LinkSaver-menu-item";

browser.contextMenus.create({
	id: MENU_ITEM_ID,
	title: "Save bookmark",
	contexts: [browser.contextMenus.ContextType.all]
});

browser.contextMenus.onClicked.addListener(function(info){
	if (info.menuItemId == MENU_ITEM_ID) {
		LinkSaver.downloadUrl();
	}
});