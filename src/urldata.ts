/**
 * Internal representation of a Windows URL file (with just one field).
 */
export class UrlData
{
	protected url: string;

	/**
	 * Constructor.
	 * @param url The url of the shortcut. Must include the protocol.
	 */
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