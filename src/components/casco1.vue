<template>
    <div class="casco01T">
        <h4>Escoge una marca del casco</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverC01" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="row">
                    <div class="col-12">
                        <select class="custom-select" v-model="marcaCasco">
                            <option value="Kask">Kask</option>
                            <option value="Catlike">Catlike</option>
                            <option value="Giro">Giro</option>
                        </select>
                        <div class="col-12" v-if="marcaCasco">
                            <button class="btn btn-secondary btnAcepMarcas" v-on:click="() => aceptar(marcaCasco)">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    export default {
        name: 'casco1',

        props: ['aceptar', 'volver'],
        data: () => ({
            marcaCasco: ''
        }),
    }
</script>

<style>
    .row {
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    h4 {
        font-size: 22px;
    }

    .casco01T{
        margin: 15px;
    }

    .btnAcepMarcas {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #btnVolverC01 {
        max-height: 50px;
        margin:5px;
    }

    .custom-select {
        max-width: 350px;
    }
</style>