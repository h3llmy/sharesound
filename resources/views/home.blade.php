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
        <div>
    </div>
</div>
@include('include.bottomnavbar')
@endsection