/// <reference path="index.d.ts"/>
import {LinkSaver} from "./linksaver";

const MENU_ITEM_ID = "LinkSaver-menu-item";

console.log("Test");

browser.contextMenus.create({
	id: MENU_ITEM_ID,
	title: "Save bookmark",
	contexts: [browser.contextMenus.ContextType.all]
});

browser.contextMenus.onClicked.addListener(function(info){
	console.log("HELP ME");
	if (info.menuItemId == MENU_ITEM_ID) {
		LinkSaver.downloadUrl();
	}
});