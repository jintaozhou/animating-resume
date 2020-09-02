<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
*
* 你好，我是周锦涛
* 好多公司正在招聘，我也来写一份简历，说做就做
*
* 这是我的一份简历，请看！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* 太高了 */
.styleEditor {
  height: 45vh;
}
/* 代码高亮 */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `周锦涛
----

程序猿、健身爱好者
现在在青岛一所高校读大三,2021年6月毕业。

主修课程
----

* 高等数学、大学英语、离散数学
* 思科网络技术、数据库、操作系统
* Linux服务器搭建、动态网站开发
* C++语言、Python语言、Java语言、PHP语言

个人荣誉
----

1. 2017-2018学年第一学期学院三等奖学金
2. 2017-2018学年第二学期学院三等奖学金
3. 2018-2019学年第二学期学院三等奖学金
4. 2019-2020学年第一学期学院三等奖学金
5. 大学一直参加志愿者活动，荣获“优秀志愿者”
6. 取得CET4全国大学生英语四级考试证书，具有良好的听说读写能力 

项目经历
----

* 2020.3      简约在线留言板项目
    这是今年学习php中关于连接数据库的一些操作时写的练手项目。
    项目预览地址 [www.fitnesscoder.top/message/](http://www.fitnesscoder.top/message/)
    项目已开源 地址[github.com/jintaozhou/PHP-Message](https://github.com/jintaozhou/PHP-Message)
* 2020.4       宠物商城项目
    这是一个老师带着练习的项目，熟悉网站开发的过程，包括前端的制作、数据库的设计以及后台的开发等。 
    项目已经部署，预览地址[www.fitnesscoder.top/petshop/](http://www.fitnesscoder.top/petshop/)
    项目已开源 地址[github.com/jintaozhou/petshop](https://github.com/jintaozhou/petshop)
* 2020.5-2020.6    Amado北欧家具商城网站项目
    这是我大三下学期结束课程设计，前端基于bootstrap,界面时尚美观。简洁的后台，管理商品、规格属性
    以及前内内容等功能基于php+mysql。丰富多样功能，搜索、购物车、订单等。完整购物流程，多端支持，
    适配不同客户端用户使用，项目已经部署。
    项目预览地址 [www.fitnesscoder.top/amado/](http://www.fitnesscoder.top/amado/)，
    视频讲解 [www.bilibili.com/video/BV1M54y1z7K5/](https://www.bilibili.com/video/BV1M54y1z7K5/) 
    项目已开源 地址[github.com/jintaozhou/Amado-Shopping-mall-website](https://github.com/jintaozhou/Amado-Shopping-mall-website)

自我评价
----

1. 在大学学习生活过程中，对新鲜知识、事物的学习比较快。
2. 对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新。
3. 性格开朗，有耐心，不乱发脾气，责任心强，肯吃苦耐劳。
4. 具有良好的沟通能力、良好的团队合作精神，缺点是内心柔软，容易感情用事。
5. 比较自律，喜欢运动健身，有两年健身经验，对健身知识有一定的了解。


社交平台
----

* [bilibili](https://space.bilibili.com/292018435)
* [个人作品集](http://www.fitnesscoder.top)

> 未完待续，
 欢迎[与我交流](mailto:1352215207@qq.com)，谢谢观看！[Inspired by] (http://strml.net/)



`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
