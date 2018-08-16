<template>
    <div class="casco02T">
        <h4>Introduzca una imagen del casco</h4>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <button type="button" id="btnVolverC02" class="btn btn-info btn-lg" v-on:click="volver">Volver</button>
            </div>
            <div class="col-12">
                <div class="column">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="upload-btn-wrapper" v-if="!image">
                                <button class="btnArchivo">Seleccionar archivo</button>
                                <input type="file" @change="onFileChange" />
                            </div>
                            <div v-else>
                                <div class="row">
                                    <div class="col-12 spaceIm">
                                        <img :src="image" />
                                        <button class="btnArchivo buttonDeleteImage" @click="removeImage">Eliminar foto</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-center">
                                        <button class="btn btn-secondary" v-on:click="() => aceptar(image)">Aceptar</button>
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

<script>
    export default {
        name: 'casco2',

        props: ['aceptar', 'volver'],
        data: () => ({
            image: ''
        }),

        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
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

    img {
        max-width: 80px;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        max-height: 100px;
    }

    .casco02T {
        margin: 15px;
    }

    #btnVolverC02 {
        max-height: 50px;
    }

    .spaceIm{
        margin-top: 5px;
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
        margin: 5px;
    }

    .upload-btn-wrapper input[type=file] {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
</style>