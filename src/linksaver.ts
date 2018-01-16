import {UrlData} from "./urldata";

export namespace LinkSaver
{
	export function downloadUrl(): void
	{
		//let gettingCurrent = browser.tabs.getCurrent();

		let gettingCurrent = browser.tabs.query({
			'active': true,
			'lastFocusedWindow': true
		});
		gettingCurrent.then(function(tabs){
			let tabinfo = tabs[0];
			let currentUrl: string = tabinfo.url;
			let udata = new UrlData(currentUrl);

			let fcontents: string = udata.fileString();
			let blob = new Blob([fcontents],
				{
					type: "text/plain"
				}
			);
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