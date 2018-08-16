<template>
    <div class="correoBici">
        <h5>Estos son los datos que nos facilita sobre su bicicleta</h5>
        <br>
        <p>Su Marca elegida es: {{data.marcaBici}}
            <br>
        </p>
        <p>Su Modelo elegido es: {{data.modeloGiant}}{{data.modeloCanyon}}{{data.modeloMerida}}{{data.modeloTrek}}{{data.modeloOrbea}}{{data.noGiantModel}}{{data.noCanyonModel}}{{data.noMeridaModel}}{{data.noTrekModel}}{{data.noOrbeaModel}}
            <br>
        </p>
        <p>El Estado de su bicicleta es de: {{data.estadoBici}}
            <br>
        </p>
        <p>La imagen/imágenes que ha introducido es:
            <br>
        </p>
        <div class="row">
            <div class="imgBRender col-12">
                <img :src="data.imageBici" />
            </div>
            <div class="imgBRender col-12">
                <img :src="data.imageBici2" />
            </div>
            <div class="imgBRender col-12">
                <img :src="data.imageBici3" />
            </div>
        </div>
        <p>El Precio introducido es de: {{data.dineroBici}}.00 €
            <br>
        </p>
        <p>Su correo electrónico es: {{data.correoBiciIn}}@{{data.correoBiciType}}.{{data.correoBiciDot}}
            <br>
        </p>
        <h5>Gracias por su atención</h5>
        <a :href="`mailto:hola@tuvalum.com?Subject=Datos%20Tuvalum%20nuevo%20producto&body=Marca:%20${data.marcaBici}%0D%0AModelo:%20${data.modeloGiant} ${data.modeloCanyon} ${data.modeloMerida} ${data.modeloTrek} ${data.modeloOrbea} ${data.noGiantModel} ${data.noCanyonModel} ${data.noMeridaModel} ${data.noTrekModel} ${data.noOrbeaModel}%0D%0AEstado%20bicicleta:%20${data.estadoBici}%0D%0APrecio:%20${data.dineroBici}.00€%0D%0ACorreoElectrónico:%20${data.correoBiciIn}@${data.correoBiciType}.${data.correoBiciDot}%0D%0AImagen:%20`"
            target="_top">Enviar Correo</a>
        <button type="button" class="btnCascoVolverBEmail btn btn-info btn-lg" v-on:click="volver">Volver Inicio</button>
    </div>
</template>

<script scoped>
    export default {
        name: 'bici5',

        props: ['data', 'volver'],
    }
</script>

<style scoped>
    .row {
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .imgBRender {
        max-height: 100px;
    }


    .btnCascoVolverBEmail {
        margin-left: 30px;
    }

    img {
        max-width: 80px;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        max-height: 100px;
    }

    .correoBici{
        margin: 10px;
    }
</style>