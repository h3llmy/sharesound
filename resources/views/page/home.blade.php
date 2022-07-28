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
            <ul id="playlist" class="container">
                <li class="card mt-2 current-song"><a onclick="wavesurfer.load('audio/H3llmy - DImention Of Taka.mp3')">H3llmy - DImention Of Taka.mp3</a></li>
                <li class="card mt-2"><a onclick="wavesurfer.load('audio/Laur - Animosity [From WACCA] MV.mp3')">Laur - Animosity [From WACCA] MV.mp3</a></li>
                <li class="card mt-2"><a onclick="wavesurfer.load('audio/Laur - Metamorphose [From WACCA].mp3')">Laur - Metamorphose [From WACCA].mp3</a></li>
            </ul>
        <div>
    </div>
</div>
@include('include.bottomnavbar')
@endsection
