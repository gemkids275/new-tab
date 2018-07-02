
$(document).ready(function(){
	var video = document.getElementById("myVideo");
	var audio = document.getElementById("myAudio");
	var myMarquee  = document.getElementById("myMarquee");
	var myText = document.getElementById("greetings");
	var number_v = Math.floor(Math.random() * 10) + 1; 
	var number_a = Math.floor(Math.random() * 10) + 1;
	// returns a number between 1 and 10
	$(".navbar-brand").click(function(){
		var link = $(this).data("click-url");
		window.location.href=link;
	})
	//thiết lập âm thanh của audio
	audio.volume = 0.5;
	//thiết lập video và audio random
	video.src="videos/video_"+number_v+".mp4";
	audio.src="audio/audio_"+number_a+".mp3";
	//thiết lập chữ chạy
	myText.onmouseover = function() {mouseOver()};
	myText.onmouseout = function() {mouseOut()};
	//di chuột vào thì dừng
	function mouseOver() {
    myMarquee.stop();
	}
	//bỏ ra thì lại chạy
	function mouseOut() {
    myMarquee.start();
	}
})