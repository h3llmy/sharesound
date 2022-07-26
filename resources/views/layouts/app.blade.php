<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('include.meta')
</head>
<body>
    @include('include.navbar')
            @yield('content')
        </main>
</body>
</html>
