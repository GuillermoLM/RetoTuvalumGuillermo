<template>
    <div class="casco03T">
        <h4>Introduzca el precio con el que desea vender el casco</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverC02" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>

            <div class="col-12 d-flex justify-content-center">
                <div class="column">
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">€</span>
                                </div>
                                <input type="number" v-model="dineroCasco" class="moneyTextCasco form-control">
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="emailC col-12">
                            <div class="input-group">
                                <input v-model="correoCascoIn" type="email" class="correoTextCasco form-control" placeholder="Introduce tu email">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input type="email" v-model="correoCascoType" class="correoTextCasco2 form-control" placeholder="gmail / hotmail / outlook">
                                <div class="input-group-append">
                                    <span class="input-group-text">.</span>
                                </div>
                                <input v-model="correoCascoDot" type="email" class="correoTextCasco3 form-control" placeholder="com / es">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12" v-if="dineroCasco && correoCascoIn && correoCascoType && correoCascoDot">
                            <button class="btn btn-secondary btnAcpCME" v-on:click="() => aceptar(dineroCasco,correoCascoIn,correoCascoType,correoCascoDot)">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    export default {
        name: 'casco3',

        props: ['aceptar', 'volver'],
        data: () => ({
            dineroCasco: '',
            correoCascoIn: "",
            correoCascoType: "",
            correoCascoDot: ""
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

    .emailC {
        margin-top: 10px;
    }

    .moneyTextCasco {
        max-width: 400px;
    }

    .casco03T {
        margin: 15px;
    }

    #btnVolverC02 {
        max-height: 50px;
    }

    .btnAcpCME {
        margin-top: 10px;
    }

    .correoTextCasco , .correoTextCasco{
        max-width: 210px;
    }

    .correoTextCasco3{
        max-width: 100px;
    }
</style>