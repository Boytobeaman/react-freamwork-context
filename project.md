### 关于react
```
使用目前最新版本 react 16.12
相对于老版本新的版本提供了一系列hooks，比如 
createContext
useState
useEffect
以解决开发中的痛点
```


### 样式层
```
主要引用antd作为前端样式层
另外在/src 文件目录下面有scss 文件夹
此scss 文件夹有两个主要功能
1. 提供覆盖全局样式的方法
2. 根据需要引入bootstrap的一些util class, 比如mt-1, bg-danger 等

说明：scss目录下有给个组件的相应样式，比如modal, panel, card, 
如果想改modal的全局样式，就在modal.scss里面改，这样就更方便维护项目的样式

如果想针对某个页面
```


### 路由功能与配置
```
路由配置文件
/src/config/router.js

里面有对应的路由路径和组件
  {
    path: `${APP_URL_NAME}/test`,
    component: Test,
    showText: "Test page 1",
    exact: true,
    showInUI: true
  },

说明
path: 对应的路径
component: 页面组件
showText：前端要显示的菜单文字
exact: 是否严格匹配路径
showInUI: 是否要再前端显示此菜单

路由功能由 react-router-dom 实现,版本5.1.2
/src/index.js 里面是路由层的配置

菜单页面显示放在组件/src/Components/Header/index.js 里面
```


### 全局公用变量与方法
```
页面入口文件及模板
/src/MainPage/index.js
里面的Template 组件的state 定义了项目的全局变量和方法
由React.createContext实现

```

### 常用文件目录说明
文件位置 | 文件说明
------------ | -------------
/src/Components  | 存放一些共享的组件，如header,footer等
/src/config  | 项目的配置文件，如后台api 地址等
/src/scss | 样式层文件
/src/utils   | 通用的方法
/src/index.js  | 项目路由文件入口
/src/MainPage/index.js  | 项目页面入口文件

```
关于页面，如果实际项目页面较少可以放在/src目录下，
如/src/PageOne

如果页面较多，可以放在pages 目录下，
如/src/pages/PageOne

每个页面文件夹一般有其index.js文件和index.scss文件
```

### BOS3D JS和CSS 文件
```
BOS3D 的源文件放在/src/public目录下
我们直接在/src/public/index.html 文件里引用
```

### API 调用
```
我们使用 axios 发送API请求，目前版本0.19

axios 的配置在/src/utils/api.js 里面

```

### 依赖与安装
```
实际使用中 yarn 比 npm 快，我们就用yarn 安装依赖
```

### 运维可配置的接口路径
```
/public/app_config.js
```

### 数据管理redux 和 createContext
```
redux 目录
/src/redux

reducer 入口文件
/src/redux/reducer.js

如何选择
目前Context API 不是为高频更新的变量而设计，如果是项目整体的theme风格的变量，变化较少，就可以用context
如果是高频更新的变量就用redux

参考链接
https://www.academind.com/learn/react/redux-vs-context-api/
https://yyccyy.com/article/cant-replace-redux-with-hooks
```