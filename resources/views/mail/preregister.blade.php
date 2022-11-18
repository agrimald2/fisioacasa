
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <div class="mt-4" style="text-align:center">
            <h1 style="font-size:1.5rem; font-family:'Somatic'">MUCHAS GRACIAS!</h1>
            <p style="font-family:'Rubik'; font-family:1.1rem">
                Te enviaremos por Whatsapp el link para completar tu perfil con tu información académica y profesional.
            </p>
            <br>
            <p style="margin-bottom:2rem; font-family:'Rubik'; font-family:1.1rem"">
                Por favor, asegúrate de revisar los requisitos para formar parte de nuesta comunidad de profesionales
                colegiados y certificados.
            </p>

            <a href="https://fisioterapeuta.fisioacasa.pe/#requirements"
                style="background-color: #ED6C14; padding: 10px!important; border-radius: 10px; text-decoration: none!important; color:white">
                Requerimientos
            </a>
        </div>
    </body>
</html>
