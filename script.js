function init() {
	$("body").append($('<input type="button" value="Red" class="ui-btn ui-btn-b" onclick="red()"/>'));
	$("body").append($('<input type="button" value="Green" class="ui-btn ui-btn-b" onclick="red()"/>'));
	$("body").append($('<input type="button" value="Blue" class="ui-btn ui-btn-b" onclick="red()"/>'));
	$("body").append($('<input type="button" value="White" class="ui-btn ui-btn-b" onclick="red()"/>'));
	$("body").append($('<input type="button" value="Fade" class="ui-btn ui-btn-b" onclick="red()"/>'));
}


function red() {
	alert("Switch to red!");
}