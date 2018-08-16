<template>
    <div class="bici04T">
        <h4>Introduzca el precio con el que desea vender la bicicleta</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverB04" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>

            <div class="col-12 d-flex justify-content-center">
                <div class="column">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">€</span>
                                </div>
                                <input v-model="dineroBici" type="number" class="moneyTextBici form-control">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="emailB col-12 d-flex justify-content-center">
                            <div class="input-group">
                                <input v-model="correoBiciIn" type="email" class="correoTextBici form-control" placeholder="Introduce tu email">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input type="email" v-model="correoBiciType" class="correoTextBici2 form-control" placeholder="gmail / hotmail / outlook">
                                <div class="input-group-append">
                                    <span class="input-group-text">.</span>
                                </div>
                                <input v-model="correoBiciDot" type="email" class="correoTextBici3 form-control" placeholder="com / es">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center" v-if="dineroBici && correoBiciIn && correoBiciType && correoBiciDot">
                            <button type="submit" class="btn btn-secondary btnAcpBME" v-on:click="() => aceptar(dineroBici,correoBiciIn,correoBiciType,correoBiciDot)">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script scoped>
    export default {
        name: 'bici4',

        props: ['aceptar', 'volver'],
        data: () => ({
            dineroBici: '',
            correoBiciIn:"",
            correoBiciType:"",
            correoBiciDot:"",
        }),
    }
</script>

<style scoped>
    .row {
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    h4 {
        font-size: 22px;
    }

    .bici04T {
        margin: 15px;
    }

    #btnVolverB04 {
        max-height: 50px;
    }

    .moneyTextBici {
        max-width: 400px;
    }

    .emailB {
        margin-top: 10px;
    }

    .correoTextBici, correoTextBici2{
        max-width: 210px;
    }

    .correoTextBici3{
        max-width: 100px;
    }

    .btnAcpBME {
        margin-top: 10px;
    }
</style>