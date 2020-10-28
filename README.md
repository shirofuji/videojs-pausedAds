# VideoJS Paused Ads
Show modal ads on your VideoJS player when user pauses the video.

## Dependencies

This code requires jQuery and VideoJS.

## Installation

Add the CSS and JS files on your HTML code.

```html
<link href="videojs.pausedAds.css" rel="stylesheet" />
<script type="text/javascript" src="//vjs.zencdn.net/7.8.4/video.js"></script>
<script type="text/javascript" src="videojs.pausedAds.js"></script>
```

## Usage

Setup your ad script.

```javascript
jQuery(document).ready(function ($) {
	var player = videojs('video-player')
	player.pausedAds({
		"adScript":"<img src='//via.placeholder.com/300x250.png' />"
	})
})
```

This code does not support advertisement codes that uses `document.write` function to generate the advertisement display.