<template>
<div id="index">
    <h3>{{title}}</h3>
    <Swiper></Swiper>
    <Dates></Dates>

</div>
</template>

<script type="text/javascript">

    import Swiper from './swiper.vue';
    import Dates from './date.vue';
   export default ({
       name: 'index',
       data(){
           return {
               title: 'Hello Vue首页!'
           }
       },
    components:{
        Swiper,
        Dates
    }
   })
</script>
<style lang="scss">
    #index{
        margin-bottom: 50px;
    }
    h3{
        color: green;
    }
</style>
