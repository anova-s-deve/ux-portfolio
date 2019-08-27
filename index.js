
function clipboard() {
	var copyText = document.getElementById("emailid");
	copyText.select();
	document.execCommand("copy");
	alert("Copied:" + emailid.value);
}