/**
HTML5 Video JQueryUI Plugin
@author tomek.abramski@gmail.com
*/



(function($){
    $.fn.videoPlugin = function(options) {
        options = $.extend({
            playPause : ["Play", "Pause"],
            stop: ['Stop'],
            fullscreen: ['Full Screen'],
            frameForMinute: 25,
            controls : false,
            width: 700,
            
        }, options);
 
        return this.each(function() {
            var video = this, $this = $(this), t;
           	video.controls = options.controls;
           	video.width = options.width;
           
            
            var track = document.createElement("div");
            track.className = "video-track";
            track.style.width = video.width + 'px';
            $(track).insertAfter(this);
            var $track = $(track);

            $track.slider({
			      range: "min",
			      value: 0,
			      min: 0,
			      max: 100,
			      slide: function( event, ui ) {
			        video.currentTime = ui.value * video.duration /100;
			        startCount();
			      }
    		});

            var controls = document.createElement("div");
            controls.className = "video-controls";
            controls.style.width = video.width + 'px';
            var $controls = $(controls);
            $controls.insertAfter(track);

            var play = document.createElement("button");
            play.className = "video-play-pause btn";
            play.innerHTML = options.playPause[0];
            $controls.append(play);

            var stop = document.createElement("button");
            stop.className = "video-stop btn";
            stop.innerHTML = options.stop
            $controls.append(stop);

            var timer = document.createElement("div");
            timer.className = "video-timer";
            timer.innerHTML = "00:00:00:00";
            $controls.append(timer);

            var fullscreen = document.createElement("button");
            fullscreen.className = "video-timer-full-screen btn";
            fullscreen.innerHTML = options.fullscreen;
            $controls.append(fullscreen);

            play.addEventListener('click',playControl,false);
  			stop.addEventListener('click',stopControl,false);
  			fullscreen.addEventListener('click',fullScreenControl,false);

  				function playControl() {
  				
				    if (!video.paused) {
				        video.pause();
				        window.clearInterval(t);
					    this.innerHTML = options.playPause[0];
					}else {
					    video.play();
					    startCount();
					    this.innerHTML = options.playPause[1]
					}
				}

				function startCount() {
    				t = setInterval(function() {
				        if (!!video.ended) {	
					            play.innerHTML = options.playPause[0]
					            clearInterval(t);
					            startCount();
					    }
		        		updateProgress();
    				},Floor(1000/options.frameForMinute));		
				}

				function updateProgress(){
					formatTime();
					$track.slider({value: video.currentTime * 100/ video.duration});
				}

				function Floor(exp){
					return Math.floor(exp);
				}

				function formatTime(){
					var time = video.currentTime;
					var ss = Floor(time%60);
				    ss = ss <10 ? '0' + ss : ss;
				    var mm = Floor(time / 60);
				    var hh = Floor(mm / 60);
				    mm = mm % 60 < 10 ? '0' + mm % 60 : mm % 60;
				    var hh = hh % 60 < 10 ? '0' + hh % 60 : hh % 60;
				    var ff = Floor(options.frameForMinute * time % options.frameForMinute);
				    ff = ff <10 ? '0' + ff :ff;
				    timer.innerHTML = hh + ':' + mm + ':' + ss + ":" + ff;
				}

				function stopControl(){
					video.pause();
					video.currentTime = 0;
					play.innerHTML = options.playPause[0];
					clearInterval(t);
				}

				function fullScreenControl(){
					if (video.requestFullscreen) {
						  video.requestFullscreen();
						} else if (video.msRequestFullscreen) {
						  video.msRequestFullscreen();
						} else if (video.mozRequestFullScreen) {
						  video.mozRequestFullScreen();
						} else if (video.webkitRequestFullscreen) {
						  video.webkitRequestFullscreen();
						}
				}


        });
    }
})(jQuery);