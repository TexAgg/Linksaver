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

	/**
	 * Get the url.
	 */
	public getUrl(): string
	{
		return this.url;
	}

	/**
	 * A string representing the contents of a url file.
	 */
	public fileString(): string
	{
		let result: string = "[InternetShortcut]";
		result += "\nURL=" + this.url;
		/*
		I don't know if the newline at the end is part of the specification,
		but my own application "urlopen" apparently won't work if there isn't.
		*/
		result += "\n";

		return result;
	}
}