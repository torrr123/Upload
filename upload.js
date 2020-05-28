function upload(url) {
	var response = UrlFetchApp.fetch(url);
	var fileName = getFilenameFromURL(url);
	var folder = DriveApp.getFoldersByName('Sharer.pw');
	var blob = response.getBlob();
	var file = folder.createFile(blob)
	file.setName(fileName)
	//file.setDescription("Download from the " + url)
	return file.getUrl();
}

//REGEX
function getFilenameFromURL(url) {
	//(host-ish)/(path-ish/)(filename)
	var re = /^https?:\/\/([^\/]+)\/([^?]*\/)?([^\/?]+)/;
	var match = re.exec(url);
	if (match) {
		return unescape(match[3]);
	}
	return null;
}

function doGet(e){
	var html  =  HtmlService.createHtmlOutputFromFile('index.html')
	return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
