# drill_platfrom fe

## 基于webpack、vue、ivew的容灾管理后台

#### 主要目录结构

```
- website
    - src                #代码开发目录
        + components     #通用组件
        + layouts        #vue单页面入口
        + pages          #页面文件
        + store          #Vuex
    + output_f           #webpack编译打包输出目录，无需建立目录可由webpack根据配置自动生成
    + node_modules       #所使用的nodejs模块
    package.json         #项目配置
    webpack.config.js    #webpack配置
    proxy.config.js      #本地开发环境代理配置
    README.md            #项目说明
```

0. 业务介绍：该项目是一个典型的SPA，包含了单页面路由vue-router和状态管理vuex.样式库使用ivew，编译工具使用webpack2.
1. 开发流程：在src/routes.js下注册单页面组件，然后在src/pages下开发页面，通用组件放在components里.
2. 调试流程：本地执行npm run dev启动服务，需要的代理接口可以在proxy.conf.js中配置
