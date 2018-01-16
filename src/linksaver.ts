import {UrlData} from "./urldata";

export namespace LinkSaver
{
	/*
	function getCurrentUrl(): Promise<any>
	{
		// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/getCurrent

		let url: Promise<string> = new Promise((resolve) => {

		});
		
		let gettingCurrent = browser.tabs.getCurrent();

		return gettingCurrent;
	}
	*/

	export function downloadUrl(): void
	{
		let gettingCurrent = browser.tabs.getCurrent();
		gettingCurrent.then(function(tabinfo){
			let currentUrl: string = tabinfo.url;
			let udata = new UrlData(currentUrl);

			let fcontents: string = udata.fileString();
			let blob = new Blob([fcontents]);
			let furl = URL.createObjectURL(blob);

			let downloading = browser.downloads.download(
				{
					url: furl,
					filename: "shortcut.url"
				}
			);
		});
	}
}