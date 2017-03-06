<template>
    <div id="bookLists" class="container">
            <h3 class="text-center">Vue图书列表</h3>
            <ul class="row">
                <li class="col-md-3 col-sm-6 text-center" v-for="user in users">

                        <div>
                        <h3 class="text-center">{{user.name}}</h3>
                        </div>
                    <router-link v-bind:to="'/user/'+user.id">
                        <div  :style="{width:'230px',height:'230px',margin: 'auto',backgroundImage:'url('+user.src+')',
                        backgroundSize: 'contain',backgroundRepeat: 'no-repeat',backgroundPosition: 'center' }" ></div>
                    </router-link>
                        <div class="perice">价格{{user.price  | currency('￥')}}</div>
                </li>
            </ul>
    </div>

</template>
<script>
    export default {
        name: 'bookLists',
        beforeCreate(){
            this.$http.jsonp('http://localhost:9090/user/books').then(res => {
                this.users = res.data;
//                console.log(this.users);
            }, err => {console.log(err);})
        },
        data(){
            return {
                title: 'Hello Vue详情',
                users: '',
                defaults: '/static/images/default.jpg',
                styles: {
                    width: '230px',
                    height: '230px'
                }
            }
        },
        filters: {
            currency: function (val,param1){
                param1 = param1 || '$';
                var num = parseFloat(val).toFixed(2);
                var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
                return param1 + num.replace(re, "$1,");

            }
        }
    }
</script>
<style lang="scss">
    ul li{
        list-style: none;
    }
    a{
        display: block;
        text-decoration: none;
        color: black;
    }

    h3 {
        color: #00aced;
    }
    .perice{
        font-size: 20px;
    }
</style>

