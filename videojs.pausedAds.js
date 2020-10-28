var pausedAds = videojs.extend(videojs.getPlugin('plugin'), {
	constructor: function (player, options) {
		var Plugin = videojs.getPlugin('plugin')
		var $ = jQuery
		Plugin.call(this, player, options)

		var settings = {
			adScript: '',
			rerunScriptOnPause: false
		}

		$.extend(settings, options)

		// setup default ad HTML container
		pausedAdHTML = '<div class="vjs-pausedAd-container"><div class="vjs-pausedAd"></div><a href="javascript:void(0)" class="vjs-pausedAd-resume">Resume</a></div>'
		var $vjs = $(player.el())
		$vjs.append(pausedAdHTML)
		var $pausedAd = $vjs.find('.vjs-pausedAd-container')
		var $pausedAdWrapper = $vjs.find('.vjs-pausedAd')
		var $pausedAdResumeBtn = $vjs.find('.vjs-pausedAd-resume')
	
		if (!settings.adScript.trim().length) {
			return
		}

		$pausedAdWrapper.append(settings.adScript)

		// display ad when video is paused
		player.on('pause', function () {
			$pausedAd.addClass('in')
			if (settings.rerunScriptOnPause) {
				$pausedAdWrapper.empty()
				$pausedAdWrapper.append(settings.adScript)
			}
		})

		player.on('play', function () {
			$pausedAd.removeClass('in')
		})

		$pausedAdResumeBtn.on('click', function () {
			player.play()
		})
	},

	setAdScript: function (adScript) {
		console.log(this)
	}
})

videojs.registerPlugin('pausedAds',pausedAds)