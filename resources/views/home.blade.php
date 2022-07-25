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
                    <div id="waveform"></div>
                </div>
            </div>    
            <div class="container d-flex justify-content-center">            
                {{-- <div id="equalizer" class="mt-3"></div> --}}
            </div>
            
            <DIv><h1>aoskdoakwdoakdoakdoakd kD akdskaj d;lakj ds;al kjal; kjd ;lakj ;alkj a;lk ja;l kja;k ja;l kja; lkja ;lkj ;alkja ;lkj ;lkj</h1></DIv>
        </div>
    </div>
</div>
@endsection