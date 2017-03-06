<template>
    <div id="register" class="container">
        <h3 class="text-center">{{title}}</h3>
        <form>
            <div class="form-group">
                <label for="username">用户名</label>
                <input id="username" v-model="users.username" class="form-control" type="text">
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input  id="password" v-model="users.password" class="form-control" type="password">
            </div>
            <div class="text-center">
                <button class="btn btn-info" type="button" @click="submit()">立即登录</button>
            </div>
        </form>
        <div class="alert alert-success" role="alert" v-show="isShow == 0">
            <a href="#" class="alert-link">提示：{{msg}}</a>
        </div>
        <div class="alert alert-warning" role="alert" v-show="isShow == 3">
            <a href="#" class="alert-link">提示：{{msg}}</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'register',
        data(){
            return {
                title: '登录页',
                users: {},
                loginUrl: 'http://localhost:9090/user/login',
                msg: '',
                isShow: 1
            }
        },
        methods: {
            submit(){
                var us = this.users;
                if(!us.username || !us.password){
                    alert('请将信息补全!');
                    return;
                }
                this.$http.jsonp(this.loginUrl,{
                    params: this.users
                }).then(res => {
                  this.isShow = res.data['errNo'];
                  this.msg = res.data['msg'];
                 if(this.isShow == 0){
                     this.users = {
                         username: '',
                         password: ''
                     };
                     this.$router.push('/');
                 }
                }, err =>{ console.log(err);});

            }
        }
    }
</script>
<style>

</style>