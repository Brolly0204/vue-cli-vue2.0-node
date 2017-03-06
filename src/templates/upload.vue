<template>
<div id="upload" class="form-group">
    <label for="bookCover">图书封面</label>
    <input type="file" id="bookCover" @change="uploadFile($event)">
</div>
</template>
<script>
   export default{
       name: 'upload',
       data(){
           return{
               files: '',
               uploadUrl: 'http://localhost:9090/user/upload'
           }
       },
       methods:{
           uploadFile(e){
               var files = e.target.files;
               var fb = new FormData();
               fb.append('fileImg',files[0]);
               this.$http.post(this.uploadUrl,fb).then(res => {
                   this.$emit('uploads', res.data);
               this.img = res.data;
           }, err => {
                   console.log(err);
               });

           }
       }
   }
</script>
<style>
</style>