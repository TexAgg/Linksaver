// https://mzl.la/2DJrAuK
// https://mzl.la/2mP5cZN

function saveOptions(e) {
	e.preventDefault();
	browser.storage.local.set({
		filename: document.querySelector("#fname").value
	});
}

function restoreOptions() {
	function setCurrentChoice(result) {
		document.querySelector("#fname").value = result.filename;
	}

	var gettingItem = browser.storage.local.get({
		filename: "shortcut"
	});
	gettingItem.then(setCurrentChoice, function(error){
		console.log(error);
	});
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);