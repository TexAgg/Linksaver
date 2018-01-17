import {UrlData} from "./urldata";

export namespace LinkSaver
{
	/**
	 * Download a shortcut to the current tab
	 * @param fname The filename to download the file as (the extension will always be `.url`)
	 */
	export function downloadUrl(fname: string = "shortcut"): void
	{
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
					filename: fname+".url"
				}
			);
		});
	}
}