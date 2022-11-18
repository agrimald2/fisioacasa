<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('fisio.register.validateDNI') }}">
            @csrf
            <div class="mt-4">
                <x-jet-label for="dni" value="{{ __('Por favor, ingrese su DNI') }}" />
                <x-jet-input id="dni" class="block mt-1 w-full" type="tel" name="dni" :value="old('dni')" required />
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
