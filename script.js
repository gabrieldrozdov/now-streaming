// Video autoplay
for (video of document.getElementsByTagName("video")) {
	video.setAttribute("playsinline", "");
	video.setAttribute("muted", "");
	video.play();
}

// Infinite scroll
const streams = document.querySelector('.streams');
setTimeout(() => {
	streams.scrollLeft = streams.children[0].offsetWidth;
}, 50);
setTimeout(() => {
	streams.addEventListener('scroll', function() {
		if (streams.scrollLeft > window.innerWidth*2) {
			streams.scrollLeft -= streams.children[0].offsetWidth;
			streams.appendChild(streams.children[0]);
		} else if (streams.scrollLeft <= 100) {
			streams.scrollLeft += streams.children[streams.children.length-1].offsetWidth;
			console.log(streams.children[streams.children.length-1])
			streams.insertBefore(streams.children[streams.children.length-1], streams.firstChild);
		}
	});
}, 100)