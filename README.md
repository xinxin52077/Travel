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

#### 推荐组件

1. 在components文件夹下，新建一个Recommend.vue的组件，如：
```vue
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li 
      class="item border-bottom"
      v-for="item of recommendList"
      :key="item.id"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0003",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0004",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0005",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/mixins';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
      margin-top: 0.16rem;
      line-height: 0.44rem;
    }
  }
}
</style>
```

2. 在Home.vue主页组件中引入推荐组件Recommend.vue，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommend from '../components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
  }
}
</script>

```

#### 周末去哪组件 (和推荐组件差不多)

1. 在components文件夹下，新建一个Weekend.vue的组件，如：
```vue
<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0003",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0004",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0005",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/mixins';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  .item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>
```

2. 在Home.vue主页组件中引入推荐组件Recommend.vue，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommend from '../components/Recommend'
import HomeWeekend from '../components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
```

#### 用ajax动态的获取数据

1. 安装axios 

命令：npm install axios --save

为了性能直接在Home.vue组件，如：
```vue
import axios from "axios";
```

2. 用axios请求本地ajax数据

引入之后就可以使用axios发送ajax请求了，由于这个项目没有接口，就只能使用本地的json数据了。

在项目的public文件夹下新建一个放置本地json数据的json文件夹，然后在json文件夹下，新建data.json文件，如：
```json
{
    "ret": true,
    "data": {
      "swiperList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },{
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        },{
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
        },{
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        }],
      "iconList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          "desc": "景点门票"
        }, {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          "desc": "滑雪季"
        }, {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          "desc": "泡温泉"
        }, {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          "desc": "动植园"
        }, {
          "id": "0005",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          "desc": "游乐园"
        }, {
          "id": "0006",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          "desc": "必游榜单"
        }, {
          "id": "0007",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          "desc": "演出"
        }, {
          "id": "0008",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          "desc": "城市观光"
        }, {
          "id": "0009",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          "desc": "一日游"
        }],
      "recommendList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          "title": "故宫",
          "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
        }, {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
          "title": "南山滑雪场",
          "desc": "北京专业级滑雪圣地"
        }, {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
          "title": "天安门广场",
          "desc": "我爱北京天安门，天安门上太阳升"
        }, {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
          "title": "水立方",
          "desc": "中国的荣耀，阳光下的晶莹水滴"
        }, {
          "id": "0005",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
          "title": "温都水城养生馆",
          "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
        }],
      "weekendList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          "title": "北京温泉排行榜",
          "desc": "细数北京温泉，温暖你的冬天"
        }, {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          "title": "北京必游TOP10",
          "desc": "来北京必去的景点非这些地方莫属"
        }, {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          "title": "寻找北京的皇城范儿",
          "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
        }, {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
          "title": "学生最爱的博物馆",
          "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
        }, {
          "id": "0005",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
          "title": "儿童剧场，孩子的乐园",
          "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
        }]
    }
}
```

补充：在vue-cli3之前，本地的json数据会被放在static文件夹下，但是vue-cli更新到3、4版本之后，这个文件夹就被删掉了，vue官方就默认把json数据放在pulic文件夹下了。

使用axios发送ajax请求本地json数据，可以使用以下这个路径请求，如：
```vue
axios.get("/json/data.json")
```

但是一般后端接口的不是长这样的，所以我们一般使用一个单独的文件来配置请求路径。

在根目录下新建一个文件vue.config.js，然后把请求配置放在这个文件里，如：
```js
module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          // 把请求路径改为请求/json文件夹下的json数据
          '^/api': '/json'
        }
      }
    },
  }
};
```

然后使用axios请求的时候，请求路径，如：
```vue
axios.get("/api/data.json")
```

3. 把首页的其它数据更新为使用axios发送ajax请求的json数据

到此为止，我们已经完成了首页的结构与样式布局，但json数据并没有更新，现在来更新一下json数据。

- 更新Swiper.vue组件的数据：

在Home.vue发送ajax，然后把数据传到Swiper.vue组件，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommend from "../components/Recommend";
import HomeWeekend from "../components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/data.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
```

Swiper.vue组件更新为，
```vue
<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
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
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true, // 循环轮播
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
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
  height: 0;
  overflow: hidden;
  padding-bottom: 30.50%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
```

Swiper.vue组件到现在已经完成了，后期可以不管了。

- 更新Icons.vue组件的数据：

在Home.vue发送ajax，然后把数据传到Icons.vue组件，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommend from "../components/Recommend";
import HomeWeekend from "../components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/data.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
```

Icons.vue组件更新为，
```vue
<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        // 禁止自动轮播
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
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

.icons {
  margin-top: 0.1rem;

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
}
</style>
```

Icons.vue组件到现在已经完成了，后期可以不管了。

- 更新Recommend.vue组件的数据：

在Home.vue发送ajax，然后把数据传到Recommend.vue组件，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommend from "../components/Recommend";
import HomeWeekend from "../components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/data.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
```

Recommend.vue组件更新为，
```vue
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/mixins';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
      margin-top: 0.16rem;
      line-height: 0.44rem;
    }
  }
}
</style>
```

Recommend.vue组件后期还有更新。

- 更新Weekend.vue组件的数据：

在Home.vue发送ajax，然后把数据传到Weekend.vue组件，如：
```vue
<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommend from "../components/Recommend";
import HomeWeekend from "../components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/data.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
```

Weekend.vue组件更新为，
```vue
<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/mixins';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  .item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>
```

Weekend.vue组件到现在已经完成了，后期可以不管了。

### city城市区域开发

#### 城市区域CityHeader开发

1. 在views文件夹下新建一个City.vue城市页面主文件

```vue
<template>
  <div class="about">
  </div>
</template>

<script>
import CityHeader from '../components/CityHeader'
export default {
  name: 'City',
}
</script>
```

然后在路由router中需要配置，如：
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
```

2. 在components文件夹下，新建CityHeader.vue组件
```vue
<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
```

3. 在City.vue引入CityHeader.vue组件，如：
```vue
<template>
  <div class="about">
    <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from '../components/CityHeader'
export default {
  name: 'City',
  components: {
    CityHeader,
  },
}
</script>
```

CityHeader后期不需要更新。

#### CitySearch城市搜索框区域开发

1. 在components文件夹下，新建CitySearch.vue组件，如：
```vue
<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '../assets/varibles.styl'
.search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
        height: .62rem
        line-height: .62rem
        width: 100%
        text-align: center
        border-radius: .06rem
        color: #666
        padding: 0 .1rem
        box-sizing: border-box
</style>
```

2. 在City.vue引入CitySearch.vue组件，如：
```vue
<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from '../components/CityHeader'
import CitySearch from '../components/CitySearch'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  },
}
</script>
```

#### CityList城市列表区域开发

1. 在components文件夹下，新建CityList.vue组件，如：
```vue
<template>
  <div class="list">
    <!-- 当前城市 -->
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>

    <!-- 热门城市 -->
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>

    <!-- 字母选择城市 -->
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">大连</div>
        <div class="item border-bottom">大连</div>
        <div class="item border-bottom">大连</div>
        <div class="item border-bottom">大连</div>
        <div class="item border-bottom">大连</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityList",
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
```

2. 在City.vue引入CityList.vue组件，如：
```vue
<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from '../components/CityHeader'
import CitySearch from '../components/CitySearch'
import CityList from '../components/CityList'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
}
</script>
```

3. 完善CityList.vue组件中的scroll滑动

安装 npm install better-scroll --save

在CityList.vue组件中引入并使用better-scroll，如：
```vue
<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <!-- 字母选择城市 -->
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">大连</div>
          <div class="item border-bottom">大连</div>
          <div class="item border-bottom">大连</div>
          <div class="item border-bottom">大连</div>
          <div class="item border-bottom">大连</div>
          <div class="item border-bottom">大连</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  mounted () {
    // 滑动
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
```

4. 在components文件夹下，新建Alphabet.vue组件。

字母选择城市组件，如：
```vue
<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles'
.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
```

在City.vue中引入Alphabet.vue组件。如：
```vue
<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '../components/CityHeader'
import CitySearch from '../components/CitySearch'
import CityList from '../components/CityList'
import CityAlphabet from '../components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
}
</script>
```

#### city的动态数据渲染

在City.vue组件引入axios发送ajax请求city.json，如：
```vue
<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '../components/CityHeader'
import CitySearch from '../components/CitySearch'
import CityList from '../components/CityList'
import CityAlphabet from '../components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      console.log(res)
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
```

在public文件夹下新建city.json，如：
```json
{
    "ret": true,
    "data": {
      "swiperList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },{
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        },{
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
        },{
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        }],
      "iconList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          "desc": "景点门票"
        }, {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          "desc": "滑雪季"
        }, {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          "desc": "泡温泉"
        }, {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          "desc": "动植园"
        }, {
          "id": "0005",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          "desc": "游乐园"
        }, {
          "id": "0006",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          "desc": "必游榜单"
        }, {
          "id": "0007",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          "desc": "演出"
        }, {
          "id": "0008",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          "desc": "城市观光"
        }, {
          "id": "0009",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          "desc": "一日游"
        }],
      "recommendList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          "title": "故宫",
          "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
        }, {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
          "title": "南山滑雪场",
          "desc": "北京专业级滑雪圣地"
        }, {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
          "title": "天安门广场",
          "desc": "我爱北京天安门，天安门上太阳升"
        }, {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
          "title": "水立方",
          "desc": "中国的荣耀，阳光下的晶莹水滴"
        }, {
          "id": "0005",
          "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
          "title": "温都水城养生馆",
          "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
        }],
      "weekendList": [{
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          "title": "北京温泉排行榜",
          "desc": "细数北京温泉，温暖你的冬天"
        }, {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          "title": "北京必游TOP10",
          "desc": "来北京必去的景点非这些地方莫属"
        }, {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          "title": "寻找北京的皇城范儿",
          "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
        }, {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
          "title": "学生最爱的博物馆",
          "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
        }, {
          "id": "0005",
          "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
          "title": "儿童剧场，孩子的乐园",
          "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
        }]
    }
}
```

更新CityList.vue组件的数据，如：
```vue
<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
          class="button-wrapper" 
          v-for="item of hot"
          :key="item.id"

          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <!-- 字母选择城市 -->
      <div 
      class="area" 
      v-for="(item, key) of cities"
      :key="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div 
          class="item border-bottom"
          v-for="innerItem of item"
          :key="innerItem.id"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    // letter: String
  },
  mounted () {
    // 滑动
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
```

更新Alphabet.vue组件的数据，如：
```vue
<template>
  <ul class="list">
    <li 
    class="item"
    v-for="(item, key) of cities"
    :key="key"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles'
.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
```


