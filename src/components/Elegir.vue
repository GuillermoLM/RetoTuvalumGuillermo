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

        <div class="correoBici" v-if="seenB5correo">
            <h5>Estos son los datos que nos facilita sobre su bicicleta</h5>
            <br>
            <p>Su Marca elegida es: {{marcaBici}}
                <br>
            </p>
            <p>Su Modelo elegido es: {{modeloGiant}}{{modeloCanyon}}{{modeloMerida}}{{modeloTrek}}{{modeloOrbea}}{{noGiantModel}}{{noCanyonModel}}{{noMeridaModel}}{{noTrekModel}}{{noOrbeaModel}}
                <br>
            </p>
            <p>El Estado de su bicicleta es de: {{estadoBici}}
                <br>
            </p>
            <p>El Precio introducido es de: {{dineroBici}}.00 €
                <br>
            </p>
            <p>Su correo electrónico es: {{correoBiciIn}}@{{correoBiciType}}.{{correoBiciDot}}
                <br>
            </p>
            <p>La imagen/imágenes que ha introducido es:
                <br>
            </p>
            <div class="row">
                <div class="imgBRender col-12">
                    <img :src="imageBici" />
                </div>
                <div class="imgBRender col-12">
                    <img :src="imageBici2" />
                </div>
                <div class="imgBRender col-12">
                    <img :src="imageBici3" />
                </div>
            </div>
            <h5>Gracias por su atención</h5>
            <a :href="`mailto:hola@tuvalum.com?Subject=Datos%20Tuvalum%20nuevo%20producto&body=Marca:%20${marcaBici}%0D%0AModelo:%20${modeloGiant} ${modeloCanyon} ${modeloMerida} ${modeloTrek} ${modeloOrbea} ${noGiantModel} ${noCanyonModel} ${noMeridaModel} ${noTrekModel} ${noOrbeaModel}%0D%0AEstado%20bicicleta:%20${estadoBici}%0D%0APrecio:%20${dineroBici}.00€%0D%0ACorreoElectrónico:%20${correoBiciIn}@${correoBiciType}.${correoBiciDot}%0D%0AImagen:%20`"
                target="_top">Enviar Correo</a>
            <button type="button" class="btnCascoVolverBEmail btn btn-info btn-lg" v-on:click="btnCascoVolverC5">Volver</button>
        </div>

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

            giant: false,
            canyon: false,
            merida: false,
            trek: false,
            orbea: false,

            noGiant: false,
            noCanyon: false,
            noMerida: false,
            noTrek: false,
            noOrbea: false,

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
                if (this.dineroBici > 1500) {
                    alert("Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros");
                }
                this.dineroBici = dB;
                this.correoBiciIn = cB1;
                this.correoBiciType = cB2;
                this.correoBiciDot = cB3;

                this.seenB5correo = true;
                this.seenB4 = false;
            },
            //Boton Volver B4
            btnCascoVolverC5: function () {
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
                if (this.dineroCasco > 1500) {
                    alert("Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros");
                }
                this.dineroCasco = data1;
                this.correoCascoIn = data2;
                this.correoCascoType = data3;
                this.correoCascoDot = data4;

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

    .bici01T,
    .bici02T,
    .bici03T,
    .casco01T,
    .casco02T,
    .casco03T {
        margin: 15px;
    }

    .btnAcpB01 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btnAcepMarcas {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btnAcpB04 {
        margin-left: 10px;
    }

    .btnAcpC02 {
        margin-top: 10px;
    }

    .btnAcpC03 {
        margin-left: 10px;
    }

    .modelGiant {
        margin-top: 10px;
    }

    .modelCanyon {
        margin-top: 10px;
    }

    .modelMerida {
        margin-top: 10px;
    }

    .modelTrek {
        margin-top: 10px;
    }

    .modelOrbea {
        margin-top: 10px;
    }

    #btnVolverC01 {
        max-height: 50px;
    }

    #btnVolverB01 {
        max-height: 50px;
    }

    #btnVolverB02 {
        max-height: 50px;
    }

    #btnVolverC02 {
        max-height: 50px;
    }

    .moneyTextBici {
        max-width: 400px;
    }

    .moneyTextCasco {
        max-width: 400px;
    }

    .correoTextBici,
    .correoTextCasco,
    .correoTextBici2,
    .correoTextCasco2 {
        max-width: 210px;
    }

    .correoTextBici3,
    .correoTextCasco3 {
        max-width: 100px;
    }

    .emailB {
        margin-top: 10px;
    }

    .emailC {
        margin-top: 10px;
    }

    .btnAcpBME {
        margin-top: 30px;
    }

    .btnAcpCME {
        margin-top: 30px;
    }

    .btnCascoVolverCEmail {
        margin-left: 20px;
    }

    .btnCascoVolverBEmail {
        margin-left: 20px;
    }

    .inputNo {
        margin-top: 10px;
    }

    .buttonDeleteImage {
        margin-left: 20px;
    }

    img {
        max-width: 80px;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        max-height: 100px;
    }

    .imgBRender {
        max-height: 100px;
    }

    .custom-select {
        max-width: 350px;
    }

    .imgBDiv {
        margin: 5px;
    }

    .estadoB {
        margin-top: 10px;
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