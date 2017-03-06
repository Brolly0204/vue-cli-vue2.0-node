<template>
    <div id="swiper">
        <el-button @click="visible = true">Hi~</el-button>
        <el-dialog v-model="visible" title="Hello world">
            <p>欢迎来到 我的世界!</p>
        </el-dialog>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="img in imgs">
             <div class="image">
                 <!--<img src="../images/1.jpg" alt="">-->
                 <img :src="img" alt="">
             </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        name: 'swiper',
        data: function(){
            return {
                visible: false,
                imgs: ['static/images/1.jpg','static/images/2.jpg','static/images/3.jpg','static/images/4.jpg']
//                imgs:[require('../images/1.jpg'),require('../images/2.jpg'),require('../images/3.jpg'),require('../images/4.jpg')]
            }
        }
    }
</script>
<style>
    .el-carousel{
         width: 750px;
        margin: auto;
        box-shadow: 3px 3px 10px #ccc;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>