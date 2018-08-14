<template>
    <div class="bici02T">
        <h4>Por favor, debe de indicarnos el estado de su bicicleta</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverB02" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>
            <div class="col-12 estadoB d-flex justify-content-center">
                <div class="dropdown">
                    <select class="custom-select" v-model="estadoBici">
                        <option value="bicicleta nueva">0: bicicleta nueva</option>
                        <option value="muy poco uso">1: muy poco uso</option>
                        <option value="usada">2: usada</option>
                        <option value="con bastante uso">3: con bastante uso</option>
                        <option value="puede necesitar algún repuesto">4: puede necesitar algún repuesto</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div v-if="estadoBici">
                    <button class="btn btn-secondary btnAcepMarcas" v-on:click="() => aceptar(estadoBici)">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    export default {
        name: 'bici2',

        props: ['aceptar', 'volver'],
        data: () => ({
            estadoBici: '',
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

    .bici02T{
        margin: 15px;
    }

    #btnVolverB02 {
        max-height: 50px;
    }

    .btnAcepMarcas {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .estadoB {
        margin-top: 10px;
    }

    .custom-select {
        max-width: 350px;
    }
</style>