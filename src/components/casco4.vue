<template>
    <div class="correoCasco">
        <h5>Estos son los datos que nos facilita sobre su casco</h5>
        <br>
        <p>Su Marca elegida es: {{data.marcaCasco}}
            <br>
        </p>
        <p>La imagen que ha introducido es:
            <br>
        </p>
        <div class="row">
            <div class="imgBRender col-12">
                <img :src="data.image" />
            </div>
        </div>
        <p>El Precio introducido es de: {{data.dineroCasco}}.00 €
            <br>
        </p>
        <p>Su correo electrónico es: {{data.correoCascoIn}}@{{data.correoCascoType}}.{{data.correoCascoDot}}
            <br>
        </p>
        <h5>Gracias por su atención</h5>
        <a :href="`mailto:hola@tuvalum.com?Subject=Datos%20Tuvalum%20nuevo%20producto&body=Marca:%20${data.marcaCasco}%0D%0APrecio:%20${data.dineroCasco}.00€%0D%0ACorreoElectrónico:%20${data.correoCascoIn}@${data.correoCascoType}.${data.correoCascoDot}%0D%0AImagen:%20`"
            target="_top">Enviar Correo</a>
        <button type="button" class="btnCascoVolverCEmail btn btn-info btn-lg" v-on:click="volver">Volver Inicio</button>
    </div>
</template>

<script scoped>
    export default {
        name: 'casco4',

        props: ["data", 'volver'],
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


    .btnCascoVolverCEmail {
        margin-left: 30px;
    }

    img {
        max-width: 80px;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        max-height: 100px;
    }

    .correoCasco{
        margin:10px;
    }
</style>