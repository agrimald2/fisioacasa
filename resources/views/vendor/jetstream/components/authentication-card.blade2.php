<div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0" id="guest_layout">
    <div>
        <img src="/images/logoHorizontalWhite.png" alt="">
    </div>

    <div class="sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {{ $slot }}
    </div>
</div>
<style>
    #guest_layout{
        background-color: #00699E;
        height: 120vh;
    }
</style>
