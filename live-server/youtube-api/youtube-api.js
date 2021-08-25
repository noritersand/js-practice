const { log } = console;

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '400',
    videoId: 'usae-rSUThI',
    playerVars: { 'controls': 1 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  console.log('Hello?');
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // console.log('ouch');
    // setTimeout(stopVideo, 3000);
    // done = true;
  }
  if (event.data === 0) {
    console.log('done');
    done = true;
    window.open('https://youtube.com', '_blank');
  }
}
function stopVideo() {
  player.stopVideo();
}

function fn() {
  var c = {
    header: 'color: black; background-color: #ddd; font-size: 15px; font-weight: bold; padding: 5px',
    label: 'color: black; background-color: #ddd; padding: 2px',
    warning: 'color: red; background-color: #ddd; padding: 2px'
  };
  if (!done) {
    console.log('%c영상을 끝까지 보세요', c.header);
    return;
  }
  console.log('아유 착해');
}

