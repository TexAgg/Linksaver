export class UrlData
{
	protected url: string;

	constructor(url: string)
	{
		this.url = url;
	}

	public getUrl(): string
	{
		return this.url;
	}

	public fileString(): string
	{
		let result: string = "[InternetShortcut]";
		result += "\nURL=" + this.url;
		result += "\n";

		return result;
	}
}