<template>
    <div class="bici01T">
        <h4>Escoge una marca y modelo de la bicicleta</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverB01" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="dropdown">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-start">
                            <h6>Marca: </h6>
                            <select class="custom-select" v-model="marcaBici">
                                <option>Giant</option>
                                <option>Canyon</option>
                                <option>Merida</option>
                                <option>Trek</option>
                                <option>Orbea</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="modelGiant" v-if="marcaBici === 'Giant'">
                                    <h6>Modelos de {{marcaBici}}</h6>
                                    <select class="custom-select" v-model="modeloGiant">
                                        <option>Propel Advanved SL Disc</option>
                                        <option>Propel Advanved Pro Disc</option>
                                        <option>Propel Advanved Disc</option>
                                        <option>TCR Advanved SL Disc</option>
                                        <option>TCR Advanved Pro</option>
                                        <option>TCR Advanved Pro 2019</option>
                                        <option>¿No encuentra su modelo?-->Escriba su modelo:</option>
                                    </select>
                                    <div v-if="modeloGiant === '¿No encuentra su modelo?-->Escriba su modelo:'">
                                        <input v-model="noGiantModel" class="inputNo" type="text" placeholder="Introduce tu modelo">
                                    </div>
                                    <div v-if="modeloGiant">
                                        <button class="btn btn-secondary btnAcpB01" v-on:click="() => aceptar(marcaBici, modeloGiant, noGiantModel,modeloCanyon, noCanyonModel, modeloMerida, noMeridaModel, modeloTrek, noTrekModel, modeloOrbea, noOrbeaModel)">Aceptar</button>
                                    </div>
                                </div>

                                <div class="modelCanyon" v-if="marcaBici === 'Canyon'">
                                    <h6>Modelos de {{marcaBici}}</h6>
                                    <select class="custom-select" v-model="modeloCanyon">
                                        <option>Strive</option>
                                        <option>Spectral</option>
                                        <option>Aeroad</option>
                                        <option>Ultimate</option>
                                        <option>Speedmax</option>
                                        <option>¿No encuentra su modelo?-->Escriba su modelo:</option>
                                    </select>
                                    <div v-if="modeloCanyon === '¿No encuentra su modelo?-->Escriba su modelo:'">
                                        <input v-model="noCanyonModel" class="inputNo" type="text" placeholder="Introduce tu modelo">
                                    </div>
                                    <div v-if="modeloCanyon">
                                        <button class="btn btn-secondary btnAcpB01" v-on:click="() => aceptar(marcaBici, modeloGiant, noGiantModel,modeloCanyon, noCanyonModel, modeloMerida, noMeridaModel, modeloTrek, noTrekModel, modeloOrbea, noOrbeaModel)">Aceptar</button>
                                    </div>
                                </div>

                                <div class="modelMerida" v-if="marcaBici === 'Merida'">
                                    <h6>Modelos de {{marcaBici}}</h6>
                                    <select class="custom-select" v-model="modeloMerida">
                                        <option>Reacto Disck Team E</option>
                                        <option>Reacto Disck Team E-900</option>
                                        <option>One Sixty 900 E</option>
                                        <option>One Twenty 800 2018</option>
                                        <option>¿No encuentra su modelo?-->Escriba su modelo:</option>
                                    </select>
                                    <div v-if="modeloMerida === '¿No encuentra su modelo?-->Escriba su modelo:'">
                                        <input v-model="noMeridaModel" class="inputNo" type="text" placeholder="Introduce tu modelo">
                                    </div>
                                    <div v-if="modeloMerida">
                                        <button class="btn btn-secondary btnAcpB01" v-on:click="() => aceptar(marcaBici, modeloGiant, noGiantModel,modeloCanyon, noCanyonModel, modeloMerida, noMeridaModel, modeloTrek, noTrekModel, modeloOrbea, noOrbeaModel)">Aceptar</button>
                                    </div>
                                </div>

                                <div class="modelTrek" v-if="marcaBici === 'Trek'">
                                    <h6>Modelos de {{marcaBici}}</h6>
                                    <select class="custom-select" v-model="modeloTrek">
                                        <option>Top Fuel 9.9 Race</option>
                                        <option>Powerfly 9 FS Plus</option>
                                        <option>Cuadro Session 29</option>
                                        <option>Domane SLR 9 Disc eTap</option>
                                        <option>Madone 9.5</option>
                                        <option>TM4+ Lowstep</option>
                                        <option>¿No encuentra su modelo?-->Escriba su modelo:</option>
                                    </select>
                                    <div v-if="modeloTrek === '¿No encuentra su modelo?-->Escriba su modelo:'">
                                        <input v-model="noTrekModel" class="inputNo" type="text" placeholder="Introduce tu modelo">
                                    </div>
                                    <div v-if="modeloTrek">
                                        <button class="btn btn-secondary btnAcpB01" v-on:click="() => aceptar(marcaBici, modeloGiant, noGiantModel,modeloCanyon, noCanyonModel, modeloMerida, noMeridaModel, modeloTrek, noTrekModel, modeloOrbea, noOrbeaModel)">Aceptar</button>
                                    </div>
                                </div>

                                <div class="modelOrbea" v-if="marcaBici === 'Orbea'">
                                    <h6>Modelos de {{marcaBici}}</h6>
                                    <select class="custom-select" v-model="modeloOrbea">
                                        <option>Alma H20 29"</option>
                                        <option>Occam AM H50</option>
                                        <option>Loki 27+</option>
                                        <option>Keram 15 29"</option>
                                        <option>¿No encuentra su modelo?-->Escriba su modelo:</option>
                                    </select>
                                    <div v-if="modeloOrbea === '¿No encuentra su modelo?-->Escriba su modelo:'">
                                        <input v-model="noOrbeaModel" class="inputNo" type="text" placeholder="Introduce tu modelo">
                                    </div>
                                    <div v-if="modeloOrbea">
                                        <button class="btn btn-secondary btnAcpB01" v-on:click="() => aceptar(marcaBici, modeloGiant, noGiantModel,modeloCanyon, noCanyonModel, modeloMerida, noMeridaModel, modeloTrek, noTrekModel, modeloOrbea, noOrbeaModel)">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    export default {
        name: 'bici1',

        props: ['aceptar', 'volver'],
        data: () => ({
            marcaBici: '',
            modeloGiant: "",
            noGiantModel: "",
            modeloCanyon: "",
            noCanyonModel: "",
            modeloMerida: "",
            noMeridaModel: "",
            modeloTrek: "",
            noTrekModel: "",
            modeloOrbea: "",
            noOrbeaModel: "",
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

    h6 {
        margin-right: 10px;
    }

    h4 {
        font-size: 22px;
    }

    .bici01T{
        margin: 15px;
    }

    #btnVolverB01 {
        max-height: 50px;
        margin: 5px;
    }

    .btnAcpB01 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .inputNo {
        margin-top: 10px;
    }

    .custom-select {
        max-width: 350px;
    }
</style>