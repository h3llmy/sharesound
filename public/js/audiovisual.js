var btnPlay = document.getElementById("btnPlay");
var btnStop = document.getElementById("btnStop");
var btnVolume = document.getElementById("btnVolume");
var timeCurrent = document.getElementById('time-current')
var timeRemaining = document.getElementById('time-remaining')
var volumeSlider = document.getElementById("VolumeSlider")

var wavesurfer = WaveSurfer.create({
normalize : true,
container: '#waveform',
waveColor: '#a3e5ff',
progressColor: '#00b7ff',
ProgressColor: 'purple',
barWidth: 1,
height: 120,
responsive: true,
hideScrollbar: true,
cursorColor: '#000',
cursorWidth : 0.1,
});

// audio load
wavesurfer.load('audio/H3llmy - DImention Of Taka.mp3');
// wavesurfer.load('audio/Laur - Animosity [From WACCA] MV.mp3');
// wavesurfer.load('audio/Laur - Metamorphose [From WACCA].mp3');
// Laur - Metamorphose [From WACCA].mp3

// audio play and pauses
btnPlay.onclick = function(){
    wavesurfer.playPause();
    if(btnPlay.src.includes("play.png")){
        btnPlay.src = "img/pause.png"
    }else{
        btnPlay.src = "img/play.png"
    }
}

window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
      wavesurfer.playPause();
      if(btnPlay.src.includes("play.png")){
          btnPlay.src = "img/pause.png"
      }else{
          btnPlay.src = "img/play.png"
      }
    }  
  });

// audio volume
volumeSlider.addEventListener("mousemove", () => {
    changeVolume(volumeSlider.value);
});
var changeVolume = (volume) => {
    wavesurfer.setVolume(volume);
    if(volumeSlider.value == 0){
        wavesurfer.setMute(true);
        btnVolume.src = "img/mute.png"
    }else{
        wavesurfer.setMute(false);
        btnVolume.src = "img/volume.png"
    }
}

// audio stop
btnStop.onclick = function(){
    wavesurfer.stop();
    btnPlay.src = "img/play.png"
    timeCurrent.innerText = '0:00'
}

window.addEventListener('keydown', (e) => {  
    if (e.key === 's' && e.target === document.body) {  
      e.preventDefault();  
      wavesurfer.stop();
      btnPlay.src = "img/play.png"
      timeCurrent.innerText = '0:00'
    }  
  });

// audio mute
btnVolume.onclick = function(){
    if(btnVolume.src.includes("volume.png")){
        wavesurfer.setMute(true);
        btnVolume.src = "img/mute.png"
    }else if(volumeSlider.value == 0){
        wavesurfer.setMute(true);
        btnVolume.src = "img/mute.png"
    }
    else{
        wavesurfer.setMute(false);
        btnVolume.src = "img/volume.png"
    }
}

window.addEventListener('keydown', (e) => {  
    if (e.key === 'm' && e.target === document.body) {  
      e.preventDefault();  
        if(btnVolume.src.includes("volume.png")){
            wavesurfer.setMute(true);
            btnVolume.src = "img/mute.png"
        }else if(volumeSlider.value == 0){
            wavesurfer.setMute(true);
            btnVolume.src = "img/mute.png"
        }
        else{
            wavesurfer.setMute(false);
            btnVolume.src = "img/volume.png"
        }
    }  
  });

// track audio
wavesurfer.on('finish', function () {
    btnPlay.src = "img/play.png"
    timeCurrent.innerText = '0:00'
    wavesurfer.stop();
});
// auto start
wavesurfer.on('ready', function () {
    // wavesurfer.normalize(true)
    btnPlay.src = "img/pause.png"
    wavesurfer.play();
});


// time
var formatTime = function (time) {
    return [
        Math.floor((time % 3600) / 60), // minutes
        ('00' + Math.floor(time % 60)).slice(-2) // seconds
    ].join(':');
};

// Show current time
wavesurfer.on('audioprocess', function () {
    timeCurrent.innerText = ( formatTime(wavesurfer.getCurrentTime()) );
});

// Show clip duration
wavesurfer.on('ready', function () {
    timeRemaining.innerText = ( formatTime(wavesurfer.getDuration()) );
});

// Equalizer
wavesurfer.on('ready', function () {
    var EQ = [
      {
        f: 32,
        type: 'lowshelf'
      }, {
        f: 64,
        type: 'peaking'
      }, {
        f: 125,
        type: 'peaking'
      }, {
        f: 250,
        type: 'peaking'
      }, {
        f: 500,
        type: 'peaking'
      }, {
        f: 1000,
        type: 'peaking'
      }, {
        f: 2000,
        type: 'peaking'
      }, {
        f: 4000,
        type: 'peaking'
      }, {
        f: 8000,
        type: 'peaking'
      }, {
        f: 16000,
        type: 'highshelf'
      }
    ];
  
    // Create filters
    var filters = EQ.map(function (band) {
      var filter = wavesurfer.backend.ac.createBiquadFilter();
      filter.type = band.type;
      filter.gain.value = 0;
      filter.Q.value = 1;
      filter.frequency.value = band.f;
      return filter;
    });
  
    // Connect filters to wavesurfer
    wavesurfer.backend.setFilters(filters);
  
    // Bind filters to vertical range sliders
    var container = document.querySelector('#equalizer');
    filters.forEach(function (filter) {
      var input = document.createElement('input');
      wavesurfer.util.extend(input, {
        type: 'range',
        min: -20,
        max: 20,
        value: 0,
        title: filter.frequency.value
      });
      input.style.display = 'inline-block';
      input.setAttribute('orient', 'vertical');
      wavesurfer.drawer.style(input, {
        'webkitAppearance': 'slider-vertical',
        width: '50px',
        height: '150px'
      });
      container.appendChild(input);
  
      var onChange = function (e) {
        filter.gain.value = ~~e.target.value;
      };
  
      input.addEventListener('input', onChange);
      input.addEventListener('change', onChange);
    });
  
    wavesurfer.filters = filters;
  });