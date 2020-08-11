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

## 项目开发环节

### 首页header区域开发

1. 安装css的辅助开发工具 stylus \ stylus-loader

命令 npm install stylus --save

命令 npm install stylus-loader --save

2. 首页header的html结构与css样式分析

Home.vue组件放在views文件夹下，用Home.vue作为整个项目的首页组件，如：
```html
<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
```

Header.vue组件放在components文件夹下，首页header的结构与样式写在Header.vue组件，如：
```html
<template>
  <div class="header">
    <!-- 左边 -->
    <div class="header-left">返回</div>

    <!-- 中间输入框 -->
    <div class="header-input">
      输入城市/景点/游玩主题
    </div>

    <!-- 右边 -->
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
.header
  display: flex
  line-height: .86rem
  background: #00bcd4
  color: #fff
  .header-left
    width: .64rem
    float: left
  .header-input
    flex: 1
    background: #fff
    border-radius: .1rem
    margin-top: .12rem
    height: .64rem
    margin-left: .2rem
    color: #ccc
    line-height: .64rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
</style>
```

不过使用Home.vue组件之前，要在路由中引入，如：
在router文件夹下的index.js引入。
```js
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]
```

#### iconfont 的使用

1. 在iconfont官网下载需要的图标，下载解压完成之后，把图标的一些文件添加到travel项目中。

把iconfont.css添加到assets文件夹下，
把iconfont.eot、iconfont.svg、iconfont.ttf、iconfont.woff、iconfont.woff2添加到assets文件夹下的iconfont文件夹中。

然后，更改iconfont.css文件里那些文件的路径，更改为./iconfont/ ，如：
```css
@font-face {font-family: "iconfont";
  src: url('./iconfont/iconfont.eot?t=1597048361488'); /* IE9 */
  src: url('./iconfont/iconfont.eot?t=1597048361488#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANQAAsAAAAAB2AAAAMDAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCIIIKATYCJAMQCwoABCAFhG0HQxt3BsgekiRFBAUUACiAAlOIh/8fw933/5tqUo07q948Lakj2SsJUiJUUqB7CftfnfZTlXGqShTaCsRjULIdkp8sl/gmxJFwJB4ZxnQ6gi0F+HtxOG5ZAvOttstYk8bYFnUBxlsDG2tSlmCB5J6Ces3EaoAuHibQakQlw1ZH3xhES3RUIJ4UyQHRFaeURqRZaOxYmOIbNGguX8IeAviafD/+gzWaKRoqetTBTbsbmn4VBnvQSoijug6ft7PAWEbFEpDEXaftAsqCS5BWr3u4FaBZs8JWbdZgTyikGLgwl9kpi/+8aETT28EyQpVfhYJM4ZdVqkveA8ENHJSgGY3YBt6i2CH0Rah9hr74zU6Ttt7MOVTqPv2g/EAmPXus4lSR4V3lppUysn/r0dVMemA1Szp45KTr9euJN28mX70af/ky5bhsiMfwDseBo6dOZIzvP3T8ZOaBy09yZxLie53vSqZXt3RKn6OnecMQwNLl9PX7ctPMzSvTmd8zpuPJ8o17Z5eC8C7uPNrcRBfQeU1yHpyCAzZiLzTuQnfuICneqXPAVdkQ70LxtuojFYN3ZpsGYjuoaNf6PewqeFH+1/UkvOqo6Uf8xuTo/lxbUt2f6LgEPydLyuB4kTCd/zb5Hv+18yeWpS+k+kxXJHjBtDQFgYJWZuRlR+n1eQvVwB2FQ7OBAoomw1A1m0IkZgkatFmGRs1WodWizuVt+nBIZAsWbCEQul2CotMPqLo9QiTmEzQY9AUadUeFVoeRtmGbmbiPbeXEIYgbO2ex4mIByo0iNs0cIZLuc/CyMMFNEK4pHmwxmuuRThIgfIsp2pRkFYJiypkfd5DjiM/HsMqZh7iEURZCrTGZaNeLjC7mh1ibOMJBINwwp1mYwoUJoFF1Ibbx+RGEROfjwAdKeqwTCE6jdI5ZGJknIDplgUklr/KMZorEShAojOIYP6yDWAgfCzKY2t3Pg3ARjOQFflUNk1KJTpUZj1f4n3ANtKIbZZSokdGg6UFxBATTI2ncU9aVSI3pms4AAAA=') format('woff2'),
  url('./iconfont/iconfont.woff?t=1597048361488') format('woff'),
  url('./iconfont/iconfont.ttf?t=1597048361488') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont/iconfont.svg?t=1597048361488#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

2. 在Header.vue组件中使用下载好的图标，然后稍微调整一下图标样式，如：
```html
<template>
  <div class="header">
    <!-- 左边 -->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>

    <!-- 中间输入框 -->
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>

    <!-- 右边 -->
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      margin-left: .2rem
      color: #ccc
      line-height: .64rem
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margit-left: -.04rem
</style>
```

3. 优化代码

因为某些样式可能需要在其它组件多次使用，我们可以使用一个文件存储这些样式，然后把样式用一个变量存储起来，最后我们在样式中使用变量就可以了。

可以使用一个文件varibles.styl存储这些样式，如：
```js
$bgColor = #00bcd4
```

然后在Header.vue中引入文件后直接使用变量，如：
```html
<style lang="stylus" scoped>
  @import '../assets/varibles';
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      margin-left: .2rem
      color: #ccc
      line-height: .64rem
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margit-left: -.04rem
</style>
```

#### 首页轮播图

1. 插件 Vue-Awesome-Swiper 能快速构建一个轮播

安装命令 npm install vue-awesome-swiper@2.6.7 --save 

安装之后在main.js中引入，如：
```js
// 引入轮播插件vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 使用轮播插件
Vue.use(VueAwesomeSwiper);
```

2. 在components文件夹下，新建一个Swiper.vue轮播组件，如：
```vue
<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true, // 循环轮播
      },
      list: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg",
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
// 改变轮播图圆点的颜色
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;

//   height: 31.25vw,
//   为了防止页面抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
```

3. 在Home.vue主页组件中引入轮播组件Swiper.vue，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
```

#### 图标区域

1. 在components文件夹下，新建一个Icons.vue放置图标的组件，如：
```vue
<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles';

.icons {
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;

  .icon {
    position: relative;
    height: 0;
    padding-bottom: 25%;
    width: 25%;
    float: left;
    overflow: hidden;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
    }
  }
}
</style>
```

2. 在Home.vue主页组件中引入图标组件Icons.vue，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
```

3. 当页面超过了8个图标的时候，让它可以像轮播图一样可以滑动到第二页。如：
```vue
<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票水水水水",
        },
        {
          id: "0002",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
        {
          id: "0003",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票",
        },
        {
          id: "0004",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
        {
          id: "0005",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票",
        },
        {
          id: "0006",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
        {
          id: "0007",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票",
        },
        {
          id: "0008",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
        {
          id: "0009",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票",
        },
        {
          id: "0010",
          imgUrl:
            "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
      ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles';
@import '../assets/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  height: 0;
  padding-bottom: 25%;
  width: 25%;
  float: left;
  overflow: hidden;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
    ellipsis();
  }
}
</style>
```

4. 在assets文件夹下新建一个文件mixins.styl，当文字溢出打点，如：
```styl
ellipsis()
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
```

更新一下assets文件夹下的varibles.styl文件，如：
```styl
$bgColor = #00bcd4
$darkTextColor = #333
```

