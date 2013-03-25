define([
	'../models/service'
], function (Service) {
		'use strict';
		//var ytplayer;
		
		var YouTube = Service.extend({
				/*
				id: 'youtube',
				domains: ['youtube.com', 'youtu.be'],
				name: 'YouTube',
				state: -1,
				settings: {
						quality: 'hd720'
				},
				initialize: function () {
						//swfobject.embedSWF('http://www.youtube.com/v/3sb6LduFwRM?fs=1&hd=1&modestbranding=1&showinfo=0&disablekb=1&controls=0&enablejsapi=1&playerapiid=player&version=3&wmode=transparent', 'player', '425', '256', '8', null, null, { allowscriptaccess: 'always', wmode: 'transparent' }, { id: 'player', name: 'player', wmode: 'transparent' });
				},
				play: function (callback) {
						ytplayer.setPlaybackQuality(this.settings.quality);
						ytplayer.playVideo();
						if( callback && typeof(callback) == 'function' )
								callback(ytplayer.getDuration());
				},
				pause: function () {
						ytplayer.pauseVideo();
				},
				seek: function (x) {
						ytplayer.seekTo(x, true);
				},
				seekPercent: function (x) {
						this.seek(x*this.totalTime());
				},
				setVolume: function (x) {
						ytplayer.setVolume(x);
				},
				getVolume: function () {
						return ytplayer.getVolume();
				},
				currentTime: function () {
						return ytplayer.getCurrentTime();
				},
				totalTime: function () {
						return ytplayer.getDuration();
				},
				buffered: function () {
						return ytplayer.getVideoLoadedFraction();
				},
				load: function (u, callback) {
						var v = url('?v', u);
						ytplayer.loadVideoById(v, 0, 'small');

						if( callback && typeof(callback) == 'function' )
								callback();
				},
				stateChange: function (s) {
						//console.log('state: '+s);
						this.state = s;
				}
				*/
		});

		/*
		window.onYouTubePlayerReady = function () {
				ytplayer = document.getElementById('player');
				ytplayer.addEventListener('onStateChange', 'onPlayerStateChange');
		};
		window.onPlayerStateChange = function () {
				// YouTube.toJSON().stateChange(state);
				// this.player.stateChange(this.state);
		};
		*/

		return new YouTube();
	}
);