<x-guest-layout>
    <x-jet-authentication-card style="text-align:center">
        <div class="registerContainer">
            @include('fisio.register.whatsapp')

            <h4 style="font-family: system-ui; text-align:center; font-size:1.2rem;">
                Datos personales
            </h4>
            <h6 style="text-align: center; font-size: 0.75rem;">
                *Los datos que se muestran, son obtenidos de RENIEC*
            </h6>
            <x-slot name="logo">
                <x-jet-authentication-card-logo />
            </x-slot>

            <x-jet-validation-errors class="mb-4" />

            <form method="POST" action="{{ route('fisio.register.finish') }}" style="font-family: 'Rubik';">
                @csrf
                <div class="mt-4 mb-2">
                    <x-jet-label for="dni" value="{{ __('DNI') }}" />
                    <x-jet-input id="dni" class="block mt-1 w-full" type="tel" name="dni"
                        value="{{ $fisio->dni }}" required />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6" style="margin-top: 1rem;">
                    <div class="">
                        <x-jet-label for="name" value="{{ __('Nombres') }}" />
                        <x-jet-input id="name" class="block mt-1 w-full" type="text" name="name"
                            value="{{ $fisio->name }}" required autofocus autocomplete="name" />
                    </div>
                    <div class="">
                        <x-jet-label for="surname" value="{{ __('Apellidos') }}" />
                        <x-jet-input id="surname" class="block mt-1 w-full" type="text" name="surname"
                            value="{{ $fisio->surname }}" required autofocus autocomplete="surname" />
                    </div>
                </div>
                <br>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div class="">
                        <x-jet-label for="sex" value="{{ __('Género') }}" />
                        <select id="sex" name="sex"
                            class="block mt-1 w-full"style="border: solid #d1d5db 1px; border-radius: 33px; padding-top: 6px; padding-bottom: 6px;">
                            <option value="M">
                                Masculino
                            </option>
                            @if ($fisio->sex != 'M')
                                <option value="F" selected>
                                    Femenino
                                </option>
                            @else
                                <option value="F">
                                    Femenino
                                </option>
                            @endif

                        </select>
                    </div>
                    <div class="">
                        <x-jet-label for="birthdate" value="{{ __('Fecha de Nacimiento') }}" />
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input datepicker id="birthdate" name="birthdate" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Fecha Nacimiento" value="{{ $input_bd }}" readonly>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <x-jet-label for="phone" value="{{ __('WhatsApp (número +51)') }}" />
                    <x-jet-input id="phone" class="block mt-1 w-full" type="tel" name="phone"
                        :value="old('phone')" required pattern="    [0-9]{9}" oninvalid="this.setCustomValidity('Ingresa un Celular válido')"/>
                </div>

                <div class="mt-4">
                    <x-jet-label for="email" value="{{ __('Correo') }}" />
                    <x-jet-input id="email" class="block mt-1 w-full" type="email" name="email"
                        :value="old('email')" required />
                </div>

                @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
                    <div class="mt-4">
                        <x-jet-label for="terms">
                            <div class="flex items-center">
                                <x-jet-checkbox name="terms" id="terms" required />

                                <div class="ml-2">
                                    {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                        'terms_of_service' =>
                                            '<a target="_blank" href="' .
                                            route('terms.show') .
                                            '" class="underline text-sm text-gray-600 hover:text-gray-900">' .
                                            __('Terms of Service') .
                                            '</a>',
                                        'privacy_policy' =>
                                            '<a target="_blank" href="' .
                                            route('policy.show') .
                                            '" class="underline text-sm text-gray-600 hover:text-gray-900">' .
                                            __('Privacy Policy') .
                                            '</a>',
                                    ]) !!}
                                </div>
                            </div>
                        </x-jet-label>
                    </div>
                @endif
                <div class="flex items-center justify-end mt-4">
                    <x-jet-button class="ml-4">
                        {{ __('Registro') }}
                    </x-jet-button>
                </div>
            </form>
        </div>
    </x-jet-authentication-card>
</x-guest-layout>
<style>
    @media (max-width:720px) {
        .registerContainer {
                height: 120vh !important;
        }
    }
</style>
