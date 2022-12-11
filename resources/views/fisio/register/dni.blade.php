<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('fisio.register.validateDNI') }}">
            @csrf
            <div class="mt-4">
                <x-jet-label for="dni" value="{{ __('Por favor, ingresa tu DNI') }}"
                    style="
                    text-align: center;
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                " />
                <x-jet-input id="dni" class="block mt-1 w-full" type="tel" name="dni" :value="old('dni')"
                    required />
            </div>
            <div
                style="
                justify-content: right;
                display: flex;
                padding: 10px;"
            >
                <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900 ml-2" style="text-decoration: none">
                    {{ __('SIGUIENTE') }} &nbsp; <i class="fa-solid fa-play"></i>
                </button>
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
