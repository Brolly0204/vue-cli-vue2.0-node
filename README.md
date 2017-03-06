# vue商品管理

> A Vue.js project: vue-cli + vue-router + vue2.0 + vue-resource + ElementUI + express + MongoDB

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 连接MongoDB（数据库）

> 1.Windows官方安装指南


mongodb32位安装版 http://pan.baidu.com/s/1mhQVHl2

MongoDB64位绿色版 http://pan.baidu.com/s/1cMM9oq

mongo客户端  http://pan.baidu.com/s/1kUIQlUZ


> 2.找到安装目录bin文件夹 (C:\Program Files\MongoDB 2.6 Standard\bin)

 - 在当前目录创建空文件夹比如 Data
 
 - 在bin文件夹里按下Shift+鼠标右键,选择在此处打开命令窗口 

 
 - 在命令行中输入mongod --dbpath=刚创建的空目录(Data),如
  mongod --dbpath=./data
  
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
