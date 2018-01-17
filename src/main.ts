/// <reference path="index.d.ts"/>
import {LinkSaver} from "./linksaver";

const MENU_ITEM_ID = "LinkSaver-menu-item";
let defaultFilename = "shortcut";

function updateFilename()
{
	browser.storage.local.get({filename: "shortcut"}).then(function(result){
		if (result.filename)
			defaultFilename = result.filename;
		//console.log(result.filename);
	}, function(error){
		console.log(error);
	}
	);
}

browser.contextMenus.create({
	id: MENU_ITEM_ID,
	title: "Save bookmark",
	contexts: [browser.contextMenus.ContextType.all]
});

browser.contextMenus.onClicked.addListener(function(info){
	if (info.menuItemId == MENU_ITEM_ID) {
		updateFilename();
		//console.log(defaultFilename);
		LinkSaver.downloadUrl(defaultFilename);
	}
});