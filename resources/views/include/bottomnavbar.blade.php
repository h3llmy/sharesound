<nav class="navbar fixed-bottom" style="background-color: #00b7ff">
    <div class="container-fluid">
        <div class="controls-bottom">
            <img src="{{ URL('img/play.png') }}" id="btnPlay">
            <img src="{{ URL('img/stop.png') }}" id="btnStop">
            <div class="dropup">
                <a href="#" id="imageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="{{ URL('img/mixer2.png') }}">
                  </a>
                <ul class="dropdown-menu" style="width: 82vh">
                  <li class="d-flex justify-content-center" style="font-weight: bold"><p>Equalizer</p></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><div id="equalizer" class="mt-3"></div></li>
                </ul>
            </div>
            <img src="{{ URL('img/volume.png') }}" id="btnVolume" class="volumes">
            <input type="range" id="VolumeSlider" class="volume-slider-bottom" name="volume-slider" min="0" max="1" step="0.001" value="1">
            <div class="time">
                <span id="time-current" style="font-weight: bold">0:00</span>
                <span style="font-weight: bold">-</span>
                <span id="time-remaining" style="font-weight: bold">0:00</span>
            </div>
        </div>
    </div>
</nav>