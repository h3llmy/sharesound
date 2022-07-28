@extends('layouts.app')

@section('content')
<div class="background">
    <div class="container-fluid mx-4">
        <div class="container-fluid rounded-3 mb-5" style="background-color: whitesmoke">
            <div class="music mt-2">
                <img src="{{ URL('img/album cover.jpg') }}">
                <div class="info">
                    <h1>DImention Of Taka</h1>
                    <p>H3llmy</p>
                    <div id="waveform">
                    </div>
                </div>
            </div>
            <div hidden>
            <audio src="" controls id="audioPlayer">
                Sorry, your browser doesn't support html5!
            </audio>
            </div>
            <ul id="playlist">

                <li class="current-song">
                    <a onclick="wavesurfer.load('audio/H3llmy - DImention Of Taka.mp3')">Exit the Premises</a></li>
                <li><a onclick="wavesurfer.load('audio/Laur - Animosity [From WACCA] MV.mp3')">Severe Tire Damage</a></li>
                <li><a onclick="wavesurfer.load('audio/Laur - Metamorphose [From WACCA].mp3')">Broken Reality</a></li>
            </ul>
        <div>
    </div>
</div>
@include('include.bottomnavbar')
@endsection
