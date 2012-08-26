
function startedPlaying(e) {
	alert( 'hi ' + e );
}

document.getElementById('watch-video').addEventListener('onStateChange', 'startedPlaying');
alert (document.getElementById('watch-video'));
alert ('sdfdsf');