<template>
    <div id="app">
        <ul class="nav nav-pills container">
            <li role="presentation" @click="flag = 'index'" :class="[flag=='index'? 'active' : '' ]">
                <router-link to="/">首页</router-link>
            </li>
            <li role="presentation" @click="flag = 'about'" :class="[flag=='about'?  'active' : '' ]">
                <router-link to="/addBook">添加图书</router-link>
            </li>
            <li role="presentation" @click="flag = 'detail'" :class="[flag=='detail'?  'active' : '' ]">
                <router-link to="/detail">图书列表</router-link>
            </li>
            <li role="presentation" @click="flag = 'register'" :class="[flag=='register'?  'active' : '' ]">
                <router-link to="/register">注册</router-link>
            </li>
            <li role="presentation" @click="flag = 'login'" :class="[flag=='login'?  'active' : '' ]">
                <router-link to="/login">登录</router-link>
            </li>
        </ul>
        <router-view class="container"></router-view>
    </div>
</template>
<script>
    import jQuery from 'jquery';
    export default {
        name: 'app',
        data(){
            return {
                flag: 'index'
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods: {
            fetchData(){
//                console.log(this.$route);
                if (this.$route.path === '/detail') {
                    this.flag = 'detail';
                } else if (this.$route.path === '/login'){
                    this.flag = 'login';
                } else if (this.$route.path === '/'){
                    this.flag = 'index';
                }
            }
        }
    }
</script>
<style lang="scss">

</style>