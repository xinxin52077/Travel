# Travel

去哪儿项目实战开发

## 项目搭建

指令 vue create 'travel'

## 项目初始化

1. 关于移动端的配置

在index.html页面的mate标签增加移动端配置语句minimum-scale=1.0,maximum-scale=1.0,user-scalable=no，如：
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

2. 引入css初始化文件

把reset.css文件放在 assets 文件夹下，然后在mian.js文件中引入，如：
```js
import './assets/reset.css'
```

3. 解决移动端1px边框差异的问题

把border.css文件放在 assets 文件夹下，然后在mian.js文件中引入，如：
```js
// 解决移动端1像素边框问题
import './assets/border.css'
```

4. 解决移动端点击有300毫米延迟的问题

引入第三方库 fastclick ， 使用命令 npm install fastclick --save ，然后在 main.js 中引入，如：
```js
// 解决移动端300毫秒点击延迟的问题
import fastClick from 'fastclick'

// 绑定fastclick
fastClick.attach(document.body);
```

5. 管理iconfont图标

在iconfont官网创建一个项目，来放置项目所需要的图标。


