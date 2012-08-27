var plugin;

function pluginLoaded() {
	plugin = document.getElementById('browsify_plugin');

	updateUI();
}

function updateUI() {
	var e = document.getElementById('shuffle');
	if( plugin.shuffling ) {
		e.style.opacity = 1.0;
	}
	else {
		e.style.opacity = 0.5;
	}

	e = document.getElementById('repeat');
	if( plugin.repeating ) {
		e.style.opacity = 1.0;
	}
	else {
		e.style.opacity = 0.5;
	}

}

function goToPreviousTrack() {
	plugin.goToPreviousTrack();
}

function playOrPause() {
	plugin.playOrPause();
}

function goToNextTrack() {
	plugin.goToNextTrack();
}

function toggleShuffle() {
	plugin.shuffling = !plugin.shuffling;

	updateUI();
}

function toggleRepeat() {
	plugin.repeating = !plugin.repeating;

	updateUI();
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('back').addEventListener('click', goToPreviousTrack);
	document.getElementById('play').addEventListener('click', playOrPause);
	document.getElementById('forward').addEventListener('click', goToNextTrack);
	document.getElementById('shuffle').addEventListener('click', toggleShuffle);
	document.getElementById('repeat').addEventListener('click', toggleRepeat);
});



var title = document.getElementById('eow-title').title;

function passTitle(title) {
	plugin.passTitle(title);
}









