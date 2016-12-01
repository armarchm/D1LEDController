function init() {
	var r= $('<input type="button" value="Red" onclick="red()"/>');
	$("body").append(r);
}


function red() {
	alert("Switch to red!");
}