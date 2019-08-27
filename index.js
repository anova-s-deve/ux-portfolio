
function clipboard() {
	var emailid = "deveanova@gmail.com";
	emailid.select();
	document.execCommand("copy");
	alert("Copied:" + emailid.value);
}