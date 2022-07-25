<nav class="navbar fixed-bottom" style="background-color: #00b7ff">
    <div class="container-fluid">
        <div class="controls-bottom">
            <img src="{{ URL('img/play.png') }}" id="btnPlay">
            <img src="{{ URL('img/stop.png') }}" id="btnStop">
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