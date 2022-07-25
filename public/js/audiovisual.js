var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#D2EDD4',
    progressColor: '#46B54D'
  })
  
  wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
  
  
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
  
    wavesurfer.setVolume(0.4);
    document.querySelector('#volume').value = wavesurfer.backend.getVolume();
    
    // Bind filters to vertical range sliders
    var container = document.querySelector('#equalizer');
    filters.forEach(function (filter) {
      var input = document.createElement('input');
      wavesurfer.util.extend(input, {
        type: 'range',
        min: -40,
        max: 40,
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
  
    
      var volumeInput = document.querySelector('#volume');
      var onChangeVolume = function (e) {
        wavesurfer.setVolume(e.target.value);
        console.log(e.target.value);
      };
    volumeInput.addEventListener('input', onChangeVolume);
    volumeInput.addEventListener('change', onChangeVolume);
  
    
    // For debugging
    wavesurfer.filters = filters;
  });