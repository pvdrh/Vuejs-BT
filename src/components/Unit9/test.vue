<template>
    <div>
        <input type="file" @change="onChangeImage">
        <button @click="uploadImage">Upload</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){

        },
        methods: {
            onChangeImage (e){
                if(e.target.files.length){
                    let file = e.target.files[0]
                }
            },
            uploadImage(){
                const formData = new FormData();
                formdata.append('name', 'Duy')
                formdata.append('price', '123456')
                formdata.append('image', this.image)

                axios({
                    method: 'post',
                    url: 'http://vuecourse.zent.edu.vn/api/products/',
                    data: formData,
                })
            }
        },
    }
</script>