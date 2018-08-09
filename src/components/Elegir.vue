<template>
    <div class="elegir">

        <div class="intro" v-if="!(seenB1 || seenC1 || seenB2 || seenC2 || seenB3 || seenC3 || seenB4 || seenC4correo || seenB5correo)">
            <h4>{{ msg }}</h4>
            <div class="row d-flex justify-content-center">
                <div class="col-12">
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
        <div class="bici01T" v-if="seenB1">
            <h4>Escoge una marca y modelo de la bicicleta</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverB01" class="btn btn-info btn-lg" v-on:click="btnBiciVolverB1">Volver</button>
                </div>
                <div class="col-8">
                    <div class="dropdown">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-start">
                                <h6>Marca: </h6>
                                <select v-model="marcaBici">
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
                                        <select v-model="modeloGiant">
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
                                            <button class="btn btn-secondary btnAcpB01" v-on:click="btnModeloElegido">Aceptar</button>
                                        </div>
                                    </div>

                                    <div class="modelCanyon" v-if="marcaBici === 'Canyon'">
                                        <h6>Modelos de {{marcaBici}}</h6>
                                        <select v-model="modeloCanyon">
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
                                            <button class="btn btn-secondary btnAcpB01" v-on:click="btnModeloElegido">Aceptar</button>
                                        </div>
                                    </div>

                                    <div class="modelMerida" v-if="marcaBici === 'Merida'">
                                        <h6>Modelos de {{marcaBici}}</h6>
                                        <select v-model="modeloMerida">
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
                                            <button class="btn btn-secondary btnAcpB01" v-on:click="btnModeloElegido">Aceptar</button>
                                        </div>
                                    </div>

                                    <div class="modelTrek" v-if="marcaBici === 'Trek'">
                                        <h6>Modelos de {{marcaBici}}</h6>
                                        <select v-model="modeloTrek">
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
                                            <button class="btn btn-secondary btnAcpB01" v-on:click="btnModeloElegido">Aceptar</button>
                                        </div>
                                    </div>

                                    <div class="modelOrbea" v-if="marcaBici === 'Orbea'">
                                        <h6>Modelos de {{marcaBici}}</h6>
                                        <select v-model="modeloOrbea">
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
                                            <button class="btn btn-secondary btnAcpB01" v-on:click="btnModeloElegido">Aceptar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bici02T" v-if="seenB2">
            <h4>Por favor, debe de indicarnos el estado de su bicicleta</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverB01" class="btn btn-info btn-lg" v-on:click="btnBiciVolverB2">Volver</button>
                </div>
                <div class="col-4">
                    <div class="dropdown">
                        <select v-model="estadoBici">
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
                        <button class="btn btn-secondary btnAcepMarcasCasco" v-on:click="btnEstadoBici">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="bici03T" v-if="seenB3">
            <h4>Introduzca hasta un máximo de 3 imágenes de la bicileta</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverC02" class="btn btn-info btn-lg" v-on:click="btnBiciVolverB3">Volver</button>
                </div>
                <div class="col-8">
                    <div class="column">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-start">
                                <input type="file" id="files" ref="files" multiple v-on:change="handleFileUploads()" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex justify-content-start">
                                <button class="btn btn-secondary btnAcpB01" v-on:click="btnAceptarImagenesBici">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bici04T" v-if="seenB4">
            <h4>Introduzca el precio con el que desea vender la bicicleta</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverC02" class="btn btn-info btn-lg" v-on:click="btnBiciVolverB4">Volver</button>
                </div>
                <div class="col-8">
                    <div class="column">
                        <div class="row">
                            <div class="col-12">
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
                            <div class="emailB col-12">
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
                            <div class="col-12 d-flex justify-content-start" v-if="dineroBici && correoBiciIn && correoBiciType && correoBiciDot">
                                <button type="submit" class="btn btn-secondary btnAcpBME" v-on:click="btnAceptarPrecioBici">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
            <h5>Gracias por su atención</h5>
            <a :href="`mailto:hola@tuvalum.com?Subject=Datos%20Tuvalum%20nuevo%20producto&body=Marca:%20${marcaBici}%0D%0AModelo:%20${modeloGiant} ${modeloCanyon} ${modeloMerida} ${modeloTrek} ${modeloOrbea} ${noGiantModel} ${noCanyonModel} ${noMeridaModel} ${noTrekModel} ${noOrbeaModel}%0D%0AEstado%20bicicleta:%20${estadoBici}%0D%0APrecio:%20${dineroBici}.00€%0D%0ACorreoElectrónico:%20${correoBiciIn}@${correoBiciType}.${correoBiciDot}`"
                target="_top">Enviar Correo</a>
            <button type="button" class="btnCascoVolverBEmail btn btn-info btn-lg" v-on:click="btnCascoVolverC5">Volver</button>
        </div>

        <!-- Casco -->
        <div class="casco01T" v-if="seenC1">
            <h4>Escoge una marca del casco</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverC01" class="btn btn-info btn-lg" v-on:click="btnCascoVolverC1">Volver</button>
                </div>
                <div class="col-offset-2 col-4">
                    <select v-model="marcaCasco">
                        <option value="Kask">Kask</option>
                        <option value="Catlike">Catlike</option>
                        <option value="Giro">Giro</option>
                    </select>
                    <div class="col-12" v-if="marcaCasco">
                        <button class="btn btn-secondary btnAcepMarcasCasco" v-on:click="btnAceptarMarcaCasco">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="casco02T" v-if="seenC2">
            <h4>Introduzca una imagen del casco</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverC02" class="btn btn-info btn-lg" v-on:click="btnCascoVolverC2">Volver</button>
                </div>
                <div class="col-8">
                    <div class="column">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-start">
                                <input type="file" ref="fileInput">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex justify-content-start">
                                <button class="btn btn-secondary btnAcpC02" v-on:click="btnAceptarImagenCasco">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="casco03T" v-if="seenC3">
            <h4>Introduzca el precio con el que desea vender el casco</h4>
            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <button type="button" id="btnVolverC02" class="btn btn-info btn-lg" v-on:click="btnCascoVolverC3">Volver</button>
                </div>
                <div class="col-8">
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
                            <div class="col-1" v-if="dineroCasco && correoCascoIn && correoCascoType && correoCascoDot">
                                <button class="btn btn-secondary btnAcpCME" v-on:click="btnAceptarPrecioCasco">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="correoCasco" v-if="seenC4correo">
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
            <h5>Gracias por su atención</h5>
            <a :href="`mailto:hola@tuvalum.com?Subject=Datos%20Tuvalum%20nuevo%20producto&body=Marca:%20${marcaCasco}%0D%0APrecio:%20${dineroCasco}.00€%0D%0ACorreoElectrónico:%20${correoCascoIn}@${correoCascoType}.${correoCascoDot}`"
                target="_top">Enviar Correo</a>
            <button type="button" class="btnCascoVolverCEmail btn btn-info btn-lg" v-on:click="btnCascoVolverC4">Volver</button>
        </div>

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
            correoBiciType:"",
            correoBiciDot:"",
            dineroCasco: "",
            correoCascoIn: "",
            correoCascoType:"",
            correoCascoDot:"",
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
            //Botones Marcas Biciletas
            btnGiant: function () {
                this.giant = true;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnCanyon: function () {
                this.giant = false;
                this.canyon = true;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnMerida: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = true;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnTrek: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = true;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnOrbea: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = true;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            //Boton pasar a B2
            btnModeloElegido: function () {
                this.seenB2 = true;
                this.seenB1 = false;
            },
            //Boton Volver B2
            btnBiciVolverB2: function () {
                this.seenB2 = false;
                this.seenB1 = true;
            },
            //Boton pasar a B3
            btnEstadoBici: function () {
                this.seenB3 = true;
                this.seenB2 = false;
            },
            //Boton Volver B3
            btnBiciVolverB3: function () {
                this.seenB3 = false;
                this.seenB2 = true;
            },
            //Aceptar Imagenes Bici
            btnAceptarImagenesBici: function () {
                this.seenB4 = true;
                this.seenB3 = false;
            },
            //Boton Volver B4
            btnBiciVolverB4: function () {
                this.seenB4 = false;
                this.seenB3 = true;
            },
            //Aceptar precio Bici
            btnAceptarPrecioBici: function () {
                if (this.dineroBici > 1500) {
                    alert("Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros");
                }
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
            btnAceptarMarcaCasco: function () {
                this.seenC2 = true;
                this.seenC1 = false;
            },
            //Boton Volver C2
            btnCascoVolverC2: function () {
                this.seenC2 = false;
                this.seenC1 = true;
            },
            //Aceptar Imagen Casco
            btnAceptarImagenCasco: function () {
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
            btnAceptarPrecioCasco: function () {
                if (this.dineroCasco > 1500) {
                    alert("Productos similares al tuyo han sido vendidos con un precio medio de 1.350 euros");
                }
                this.seenC4correo = true;
                this.seenC3 = false;
            },

            //No modelos
            btnNoGiant: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = true;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnNoCanyon: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = true;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnNoMerida: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = true;
                this.noTrek = false;
                this.noOrbea = false;
            },
            btnNoTrek: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = true;
                this.noOrbea = false;
            },
            btnNoOrbea: function () {
                this.giant = false;
                this.canyon = false;
                this.merida = false;
                this.trek = false;
                this.orbea = false;
                this.noGiant = false;
                this.noCanyon = false;
                this.noMerida = false;
                this.noTrek = false;
                this.noOrbea = true;
            }
        }
    }
</script>

<style scoped>
    .row {
        margin-left: 0px !important;
        margin-right: 0px !important;
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

    .btnAcepMarcasCasco {
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

    #btnVolverC02 {
        max-height: 50px;
    }

    .moneyTextBici {
        max-width: 400px;
    }

    .moneyTextCasco {
        max-width: 400px;
    }

    .correoTextBici, .correoTextCasco, .correoTextBici2, .correoTextCasco2{
        max-width: 210px;
    }

    .correoTextBici3,.correoTextCasco3 {
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
</style>