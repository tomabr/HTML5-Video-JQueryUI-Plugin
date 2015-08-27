# HTML5-Video-JQueryUI-Plugin
Plugin for video tag, that gives more capabilities to style. It is based on Slider JQuery UI.
You can very simple style yours video with diffrents CSS preprocesor. It depends on you and your imagination.
##Require - jQuery and jQuery UI
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
```
##Call
In html file:
```
<video>
				  <source src="" type="video/ogg">
				  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
				  Your browser does not support the <code>video</code> element. Update browser! 
				  Have heart for developpers!
</video>
```
In js <script>:
```
$('video').videoPlugin();
```
##Defaults opitons:
```
playPause : ["Play", "Pause"], //text in the play button
stop: ['Stop'], //text in the stop button
fullscreen: ['Full Screen'], //text in the full screen button
frameForMinute: 25, //amount frame for minutes
controls : false, //default controls in video 
width: 700, //width of video
```
You can simple give icons to your buttons using opitons:
```
$('video').videoPlugin({
					playPause : ['<i class="material-icons">play_arrow</i>', '<i class="material-icons">pause</i>'],
		      stop: '<i class="material-icons">stop</i>',
		      fullscreen: '<i class="material-icons">settings_overscan</i>',
	});

```










