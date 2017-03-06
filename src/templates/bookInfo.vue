<template>
    <div id="bookInfo" class="text-center book">
        <h3 v-show="!isShow">书名：{{user.name}}</h3>
        <div v-show="isShow" class="row">
            <label for="name" class="col-md-3">书名：</label>
            <input id="name" class="form-control col-md-9" v-model="users.name" type="text">
        </div>

        <div  :style="{width:'230px',height:'230px',margin: 'auto',backgroundImage:'url('+user.src+')',
                        backgroundSize: 'contain',backgroundRepeat: 'no-repeat',backgroundPosition: 'center' }" ></div>
        <div v-show="!isShow" class="price">价格：{{user.price | currency('￥')}}</div>
        <div v-show="isShow">
            <label for="price">价格：</label>
            <input id="price" class="form-control" v-model="users.price" type="text">
        </div>
        <div><button type="button" @click="update()" class="btn btn-warning"  v-show="!isShow">编辑</button> <button type="button" class="btn btn-danger" v-show="!isShow" @click="remove(user.id)">删除</button><button type="button" class="btn btn-warning" v-show="isShow" @click="cancel()">取消</button> <button class="btn btn-primary" type="button" @click="submit()"  v-show="isShow">确认修改</button></div>
    </div>
</template>
<script>
    export default {
        name: 'bookInfo',
        beforeCreate(){
            this.$http.jsonp('http://localhost:9090/user/'+this.$route.params.id).then(res => {
            this.user = res.data[0];
            this.users = Object.assign({},this.user);
//            console.log(this.users);
          },err => {
                console.log(err);
            })
        },
        data(){
            return {
                user: '',
                isShow: false,
                users:''
            }
        },
        methods:{
            remove(rid){
                this.$http.jsonp('http://localhost:9090/user/removeBook',{
                    params: {rid}
                }).then(res => {
                     if(res.ok){
                         alert('删除成功');
                         this.$router.push('/detail')
                     }
                }, err => {
                    console.log(err);
                })
            },
            update(){
                this.isShow = true;
            },
            submit(){
                this.isShow = false;
                this.user = Object.assign({},this.users);
                this.$http.jsonp('http://localhost:9090/user/update',{
                    params:{
                        uid: this.user.id,
                        data: this.user
                    }
                }).then(res => {console.log(res)},err => {console.log(err)})
            },
            cancel(){
                this.isShow = false;
                this.users = Object.assign({},this.user);
            }
        },
        filters: {
            currency: function (val,param1){
                param1 = param1 || '￥';
                var num = parseFloat(val).toFixed(2);
                var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
                return param1 + num.replace(re, "$1,");

            }
        }
    }
</script>
<style>
.book input{
    text-align: center;
    margin-bottom: 10px;
}
.price{
    font-size: 20px;
    margin-bottom: 10px;
}
</style>