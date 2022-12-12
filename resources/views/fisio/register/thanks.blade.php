<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>
        <div class="thanksContainer">
            <div class="mt-4" style="text-align:center">
                <h1 style="font-size:1.5rem; font-family:system-ui">¡MUCHAS GRACIAS!</h1>
                <br>
                <p style="font-family:'Rubik'; font-family:1.1rem">
                    Te enviaremos por Whatsapp al número <strong>{{ $fisio->phone }}</strong> el link para completar tu
                    perfil con tu información académica y profesional.
                </p>
                <p style="margin-bottom:2rem; font-family:'Rubik'; font-family:1.1rem">
                    Por favor, asegúrate de revisar los requisitos para formar parte de nuesta comunidad de
                    profesionales
                    colegiados y certificados.
                </p>
                <a href="https://fisioterapeutas.fisioacasa.pe/#requirements"
                    style="background-color: #ED6C14; padding: 10px!important; border-radius: 10px; text-decoration: none!important; color:white">
                    Requerimientos
                </a>

            </div>
        </div>
    </x-jet-authentication-card>
</x-guest-layout>
<style>
    .thanksContainer{
        width: 100%;
    }
</style>
