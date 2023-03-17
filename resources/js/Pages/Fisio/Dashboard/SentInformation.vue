<template>
  <div class="row no-row" style="--bs-gutter-x: 0.75rem">
    <div class="row no-row">
      <div class="col-md-12">
        <div class="jumbotron text-center">
          <h1 class="display-4">¡Muchas gracias!</h1>
          <p class="lead">Tu información ha sido recibida y será validada.</p>
          <hr class="my-4" />
          <h1><i class="fa-solid fa-clock" style="color: #ed6c14"></i></h1>
          <h5 class="mt-2 mb-4">
            Pronto recibirás un mensaje de confirmación y podrás seguir con lo siguiente
            pasos.
          </h5>
          <a class="btn btn-primary btn-lg bg-orange" href="/" role="button">CONTACTO</a>
        </div>
      </div>
    </div>
    <div class="row card mt-4 pb-2" style="--bs-gutter-x: 0.75rem">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="jumbotron text-center">
              <hr class="my-4" style="background-color: #ed6c14 !important" />
              <p class="lead">
                Por lo pronto, te invitamos a subir tus PRECIOS, UBICACIONES y HORARIOS
                para que conozcas la plataforma
              </p>
              <a
                class="btn btn-primary btn-lg bg-orange m-2"
                href="/fisio/price"
                role="button"
                >PRECIO</a
              >
              <a class="btn btn-primary btn-lg notDone m-2" href="/fisio/location" role="button"
                >UBICACIONES</a
              >
              <a class="btn btn-primary btn-lg notDone m-2" href="/fisio/schedules" role="button"
                >HORARIOS</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
