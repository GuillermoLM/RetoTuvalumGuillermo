<template>
    <div class="bici03T">
        <h4>Introduzca hasta un máximo de 3 imágenes de la bicileta</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverB03" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>
            <div class="col-12">
                <div class="column">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="column">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-center">
                                        <div class="upload-btn-wrapper" v-if="!imageBici">
                                            <button class="btnArchivo">Seleccionar archivo</button>
                                            <input type="file" @change="onFileChangeBici"/>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <div class="upload-btn-wrapper" v-if="!imageBici2">
                                            <button class="btnArchivo">Seleccionar archivo</button>
                                            <input type="file" @change="onFileChangeBici2"/>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <div class="upload-btn-wrapper" v-if="!imageBici3">
                                            <button class="btnArchivo">Seleccionar archivo</button>
                                            <input type="file" @change="onFileChangeBici3"/>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <div v-if="imageBici">
                                            <div class="row">
                                                <div class="col-12">
                                                    <img :src="imageBici" />
                                                    <button class="btnArchivo buttonDeleteImage" @click="removeImageBici">Eliminar foto</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <div v-if="imageBici2">
                                            <div class="row">
                                                <div class="col-12">
                                                    <img :src="imageBici2" />
                                                    <button class="btnArchivo buttonDeleteImage" @click="removeImageBici2">Eliminar foto</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <div v-if="imageBici3">
                                            <div class="row">
                                                <div class="col-12">
                                                    <img :src="imageBici3" />
                                                    <button class="btnArchivo buttonDeleteImage" @click="removeImageBici3">Eliminar foto</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <div class="col-12 d-flex justify-content-center" v-if="imageBici || imageBici2 || imageBici3">
                                            <button class="btn btn-secondary btnAcpC02" v-on:click="() => aceptar(imageBici, imageBici2, imageBici3)">Aceptar</button>
                                        </div>
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
        name: 'bici3',

        props: ['aceptar', 'volver'],
        data: () => ({
            imageBici: '',
            imageBici2: '',
            imageBici3: '',
        }),

        methods: {
            onFileChangeBici(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImageBici(files[0]);
            },
            createImageBici(file) {
                var imageBici = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.imageBici = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImageBici: function (e) {
                this.imageBici = '';
            },

            onFileChangeBici2(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImageBici2(files[0]);
            },
            createImageBici2(file) {
                var imageBici2 = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.imageBici2 = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImageBici2: function (e) {
                this.imageBici2 = '';
            },

            onFileChangeBici3(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImageBici3(files[0]);
            },
            createImageBici3(file) {
                var imageBici3 = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.imageBici3 = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImageBici3: function (e) {
                this.imageBici3 = '';
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

    h4 {
        font-size: 22px;
    }

    .bici03T {
        margin: 15px;
    }

    #btnVolverB03 {
        max-height: 50px;
    }

    .imgBDiv {
        margin: 5px;
    }

    .buttonDeleteImage {
        margin-left: 20px;
    }

    .btnAcpC02 {
        margin-top: 10px;
    }

    img {
        max-width: 80px;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        max-height: 100px;
    }

    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .btnArchivo {
        border: 2px solid gray;
        color: gray;
        background-color: white;
        padding: 5px 10px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: bold;
        margin:5px;
    }

    .upload-btn-wrapper input[type=file] {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
</style>