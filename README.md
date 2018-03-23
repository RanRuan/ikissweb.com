# 分析项目结构

1. 创建应用
    - create-react-app ikissweb

2. App 需求

该应用涉及到了3个大的页面
- 首页 - 
- 主题页 - 
    - 文章页 - 

- 后台登陆 - 登录-单独子域
- 后台首页 - admin


3. 路由
# 路由
- /  首页
    - /html5 : 文章列表
        - /article/:title : 文章详情
    - /javascript
        - /article/:title : 文章详情
        
- admin.ikissweb.com

- index.js : app入口文件
- app.js : app的根组件

- /components : 存放子组件
    - head.Component.js : 头
    - article.Component.js :文章组件
    
- /assets : 存放静态文件
    /assets/style:
        - common.css : 通用样式
        - index.css
        - article.css
    /assets/imgs
        - bg
        - icon 
     /assets/fonts
        - 字体 
    
- reducers : 存放 reducer
- router : 存放 路由

4 绑定路由组件
# 绑定路由组件

- 安装 react-router-dom
- 在根组件上包裹一个路由组件: BrowserRouter
    - import {BrowserRouter} from 'react-router-dom'
- 在我们需要显示路由组件的地方使用 Route
    - import {Route} from 'react-router-dom'
    - 具体配置参考：# 路由
    
5 数据获取
Ajax 3中
Axios
跨域用到后端代理
# 数据获取

因为该接口不支持jsonp格式，所以采用ajax
    - 原生 ajax
    - 原生 fetch
    - 第三方封装的框架：jq、axios
    
我这里使用了：axios : https://www.npmjs.com/package/axios


6 redux存储数据
# 使用 redux 存储数据

yarn add redux react-redux

- 创建 store : Redux.createStore()
- 导入 Provider : react-redux
    - 把应用包裹在 Provider 组件中
    - 给 Provider 设置 store 属性 
- 创建 store 需要提供 reducer
- 把所有的项目中用到的reducer放到reducers的目录进行管理，然后通过 合并函数返回 最终的 reducers
