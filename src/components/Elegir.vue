<template>
    <div class="elegir">
        <div class="intro" v-if="!(seenB1 || seenC1 || seenB2 || seenC2 || seenB3 || seenC3 || seenB4 || seenC4correo || seenB5correo)">
            <h4>{{ msg }}</h4>
            <div class="row d-flex justify-content-center">
                <div class="col-12 ">
                    <div class="buttIni">
                        <div class="row d-flex justify-content-center">
                            <div class="col-6">
                                <button type="button" id="btnBici" class="btn btn-primary btn-lg" v-on:click="btnBici">Bicicleta</button>
                            </div>
                            <div class="col-6">
                                <button type="button" id="btnCasco" class="btn btn-primary btn-lg" v-on:click="btnCasco">Casco</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bici -->
        <bici1 :aceptar="btnModeloElegido" :volver="btnBiciVolverB1" v-if="seenB1"/>
        <bici2 :aceptar="btnEstadoBici" :volver="btnBiciVolverB2" v-if="seenB2"/>
        <bici3 :aceptar="btnAceptarImagenesBici" :volver="btnBiciVolverB3" v-if="seenB3"/>
        <bici4 :aceptar="btnAceptarPrecioBici" :volver="btnBiciVolverB4" v-if="seenB4"/>
        <bici5 :data="{marcaBici,modeloGiant,noGiantModel,modeloCanyon,noCanyonModel,modeloMerida,noMeridaModel,modeloTrek,noTrekModel,modeloOrbea,noOrbeaModel,estadoBici,dineroBici,correoBiciIn,correoBiciType,correoBiciDot,imageBici,imageBici2,imageBici3}" :volver="btnCascoVolverB5" v-if="seenB5correo"/>

        <!-- Casco -->
        <casco1 :aceptar="btnAceptarMarcaCasco" :volver="btnCascoVolverC1" v-if="seenC1" />
        <casco2 :aceptar="btnAceptarImagenCasco" :volver="btnCascoVolverC2" v-if="seenC2" />
        <casco3 :aceptar="btnAceptarPrecioCasco" :volver="btnCascoVolverC3" v-if="seenC3" />
        <casco4 :data="{marcaCasco,dineroCasco,correoCascoIn,correoCascoType,correoCascoDot,image}" :volver="btnCascoVolverC4" v-if="seenC4correo" />
    </div>
</template>

<script>
    export default {
        name: 'Elegir',

        props: {
            msg: String
        },

        data: () => ({
            dineroBici: "",
            correoBiciIn: "",
            correoBiciType: "",
            correoBiciDot: "",
            dineroCasco: "",
            correoCascoIn: "",
            correoCascoType: "",
            correoCascoDot: "",
            estadoBici: "",
            marcaBici: "",
            marcaCasco: "",
            modeloGiant: "",
            modeloCanyon: "",
            modeloMerida: "",
            modeloTrek: "",
            modeloOrbea: "",
            noGiantModel: "",
            noCanyonModel: "",
            noMeridaModel: "",
            noTrekModel: "",
            noOrbeaModel: "",

            seenB1: false,
            seenC1: false,
            seenB2: false,
            seenC2: false,
            seenB3: false,
            seenC3: false,
            seenB4: false,
            seenB5correo: false,
            seenC4correo: false,

            image: "",
            imageBici: "",
            imageBici2:"",
            imageBici3:"",
            dataURL: "",
        }),

        methods: {
            // BICILETA //
            btnBici: function () {
                this.seenB1 = true;
            },
            //Boton Volver B1
            btnBiciVolverB1: function () {
                this.seenB1 = false;
            },
            //Boton pasar a B2
            btnModeloElegido: function (marca, moGi, noGiM, moCa, noCaM, moMe, noMeM, moTr, noTrM, moOr, noOrM) {
                this.marcaBici = marca;
                this.modeloGiant = moGi;
                this.noGiantModel = noGiM;
                this.modeloCanyon = moCa;
                this.noCanyonModel = noCaM;
                this.modeloMerida = moMe;
                this.noMeridaModel = noMeM;
                this.modeloTrek = moTr;
                this.noTrekModel = noTrM;
                this.modeloOrbea = moOr;
                this.noOrbeaModel = noOrM;

                this.seenB2 = true;
                this.seenB1 = false;
            },
            //Boton Volver B2
            btnBiciVolverB2: function () {
                this.seenB2 = false;
                this.seenB1 = true;
            },
            //Boton pasar a B3
            btnEstadoBici: function (estB) {
                this.estadoBici = estB;

                this.seenB3 = true;
                this.seenB2 = false;
            },
            //Boton Volver B3
            btnBiciVolverB3: function () {
                this.seenB3 = false;
                this.seenB2 = true;
            },
            //Aceptar Imagenes Bici
            btnAceptarImagenesBici: function (iB1, iB2, iB3) {
                this.imageBici = iB1;
                this.imageBici2 = iB2;
                this.imageBici3 = iB3;

                this.seenB4 = true;
                this.seenB3 = false;
            },
            //Boton Volver B4
            btnBiciVolverB4: function () {
                this.seenB4 = false;
                this.seenB3 = true;
            },
            //Aceptar precio Bici
            btnAceptarPrecioBici: function (dB, cB1, cB2, cB3) {
                this.dineroBici = dB;
                this.correoBiciIn = cB1;
                this.correoBiciType = cB2;
                this.correoBiciDot = cB3;

                if (this.dineroBici > 1500) {
                    alert("Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros");
                }

                this.seenB5correo = true;
                this.seenB4 = false;
            },
            //Boton Volver B4
            btnCascoVolverB5: function () {
                this.seenB4 = true;
                this.seenB5correo = false;
            },

            // CASCO //
            btnCasco: function () {
                this.seenC1 = true;
            },
            //Boton Volver C1
            btnCascoVolverC1: function () {
                this.seenC1 = false;
            },
            //Boton Marcas Cascos
            btnAceptarMarcaCasco: function (data) {
                this.marcaCasco = data;
                this.seenC2 = true;
                this.seenC1 = false;
            },
            //Boton Volver C2
            btnCascoVolverC2: function () {
                this.seenC2 = false;
                this.seenC1 = true;
            },
            //Aceptar Imagen Casco
            btnAceptarImagenCasco: function (data) {
                this.image = data;
                this.seenC3 = true;
                this.seenC2 = false;
            },
            //Boton Volver C3
            btnCascoVolverC3: function () {
                this.seenC3 = false;
                this.seenC2 = true;
            },
            btnCascoVolverC4: function () {
                this.seenC3 = true;
                this.seenC4correo = false;
            },
            //Aceptar precio Casco
            btnAceptarPrecioCasco: function (data1, data2, data3, data4) {
                this.dineroCasco = data1;
                this.correoCascoIn = data2;
                this.correoCascoType = data3;
                this.correoCascoDot = data4;

                if (this.dineroCasco > 1500) {
                    alert("Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros");
                }

                this.seenC4correo = true;
                this.seenC3 = false;
            },
        }
    }
</script>

<style scoped>
    .row {
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    h6 {
        margin-right: 10px;
    }

    .buttIni {
        padding-top: 20px;
    }

    h4 {
        font-size: 22px;
    }
</style>


<!-- <form id="contactform" action="//formspree.io/gallo.elcau@gmail.com" method="POST">
                <h5>Estos son los datos que nos facilita sobre su casco</h5>
                <br>
                <p>Su Marca elegida es: {{marcaCasco}}
                    <br>
                </p>
                <p>El Precio introducido es de: {{dineroCasco}}.00 €
                    <br>
                </p>
                <p>Su correo electrónico es: {{correoCascoIn}}@{{correoCascoType}}.{{correoCascoDot}}
                    <br>
                </p>
                <p>La imagen que ha introducido es:
                    <br>
                </p>
                <img :src="image" />
                <h5>Gracias por su atención</h5>
                <input type="text" name="name" placeholder="Your name">
                <input type="email" name="_replyto" placeholder="Your email">
                <textarea name="message" placeholder="Your message"></textarea>
                <select name="option">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <input name="image" type="file" @change="onFileChange">
                <input type="submit" value="Send Email">
            </form> -->