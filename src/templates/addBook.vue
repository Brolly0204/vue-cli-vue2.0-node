<template>
  <div id="addBook" class="container">
      <h3>{{title}}</h3>
      <form>
          <div class="form-group">
              <label for="name">书名</label>
              <input  v-model="book.name" id="name" type="text" class="form-control" placeholder="图书名称">
          </div>
          <Upload @uploads="receiveFile"></Upload>

          <div @click="scale=!scale" :class="{scaleImg: !scale,dImg: scale}" v-show="imgSrc" :style="[{backgroundImage: 'url('+imgSrc+')'},styles]" alt=""><strong @click.stop="deleteImg" class="delete">X</strong></div>
          <div class="form-group">
              <label for="price">价格</label>
              <input v-model="book.price" id="price" type="text" class="form-control" placeholder="图书价格">
          </div>
          <div class="text-center">
          <button type="button" class="btn btn-primary" @click="addBook()">增加图书</button>
          </div>
      </form>
      <!--<img src="http://localhost:9090/3229ad643d09d820e9c392c5d9e7596b" alt="">-->

  </div>
</template>
<script>
    import Upload from './upload.vue';
    export default {
        name: 'addBook',
        created(){
//            console.log(this.file);
        },
        data(){
            return {
                title: '添加图书',
                book: {},
                addUrl: 'http://localhost:9090/user/addBook',
                imgSrc: '',
                scale: true,
                styles: {
                    position: 'relative',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100px',
                    height: '100px'
                }
            }
        },
        methods:{
             addBook(){
                  if(!this.book.name || !this.imgSrc || !this.book.price){
                       alert('请将图书信息填全');
                      return;
                  }
                 console.log(this.imgSrc);
                 this.book.src = this.imgSrc;
                 this.$http.post(this.addUrl,this.book).then(res => {
                        if(res.ok){
                            this.book = {};
                            alert(res.data);
                            this.$router.push('/detail');
                          }
                 }, err => {
                     console.log(err);
                 })
             },
             receiveFile(imgsrc){
//                 console.log(imgsrc);
                 this.imgSrc = imgsrc;
             },
            deleteImg(){
                this.imgSrc = '';
                this.scale = true;
            }
        },
        components:{
            Upload
        }
    }
</script>
<style>
    .scaleImg {
        -webkit-transition: all .5s linear;
        -moz-transition: all .5s linear ;
        -ms-transition: all .5s linear ;
        -o-transition: all .5s linear ;
        transition: all .5s linear ;
        width: 300px !important;
        height: 300px !important;
    }
    .dImg {
        -webkit-transition: all .5s linear;
        -moz-transition: all .5s linear ;
        -ms-transition: all .5s linear ;
        -o-transition: all .5s linear ;
        transition: all .5s linear ;
        width: 100px;
        height: 100px;
    }
  h3{
      color: #00aced;
  }
    .delete{
        position: absolute;
        right: -13%;
        top: -5%;
        font-size: 20px;
        z-index: 11;
    }
</style>

