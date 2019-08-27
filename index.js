
function clipboard() {
	var emailid = "deveanova@gmail.com";
	emailid.selectText();
	document.execCommand("copy");
	alert("Copied:" + emailid.value);
}