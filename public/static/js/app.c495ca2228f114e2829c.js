webpackJsonp([1],{40:function(n,t){},41:function(n,t,e){e(87);var r=e(14)(e(48),e(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,t,e){e(86);var r=e(14)(e(49),e(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,t,e){e(85);var r=e(14)(e(46),e(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,t,e){e(88);var r=e(14)(e(47),e(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),s=e.n(i),a=e(24),u=e.n(a),l=e(42),c=e.n(l),d=e(41),h=e.n(d),m=e(40);e.n(m);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n*\n* 你好，我是周锦涛\n* 好多公司正在招聘，我也来写一份简历，说做就做\n*\n* 这是我的一份简历，请看！\n*/\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"周锦涛\n----\n2017.9-至今就读于青岛理工大学琴岛学院计算机科学与技术专业\n求职意向:后端开发工程师\n\n主修课程\n----\n\n* 高等数学、大学英语、离散数学\n* 思科网络技术、数据库、操作系统\n* Linux服务器搭建、动态网站开发\n* C++语言、Python语言、Java语言、PHP语言\n\n个人荣誉\n----\n\n1. 2017-2018学年第一学期学院三等奖学金\n2. 2017-2018学年第二学期学院三等奖学金\n3. 2018-2019学年第二学期学院三等奖学金\n4. 2019-2020学年第一学期学院三等奖学金\n5. 大二期间参加参加志愿者活动，荣获“优秀志愿者”证书\n6. 取得CET4全国大学生英语四级考试证书，具有良好的听说读写能力\n7. 取得NCR全国计算机等级考试二级Python证书\n\n项目经历\n----\n\n* 2020.3      简约在线留言板项目\n    这是今年学习php中关于连接数据库的一些操作时写的练手项目。\n    项目预览地址 [www.fitnesscoder.top/message/](http://www.fitnesscoder.top/message/)\n    项目已开源 地址[github.com/jintaozhou/PHP-Message](https://github.com/jintaozhou/PHP-Message)\n* 2020.4       宠物商城项目\n    这是一个老师带着练习的项目，熟悉网站开发的过程，包括前端的制作、数据库的设计以及后台的开发等。 \n    项目已经部署，预览地址[www.fitnesscoder.top/petshop/](http://www.fitnesscoder.top/petshop/)\n    项目已开源 地址[github.com/jintaozhou/petshop](https://github.com/jintaozhou/petshop)\n* 2020.5-2020.6    Amado北欧家具商城网站项目\n    这是我大三下学期结束课程设计，前端基于bootstrap,界面时尚美观。简洁的后台，管理商品、规格属性\n    以及前内内容等功能基于php+mysql。丰富多样功能，搜索、购物车、订单等。完整购物流程，多端支持，\n    适配不同客户端用户使用，项目已经部署。\n    项目预览地址 [www.fitnesscoder.top/amado/](http://www.fitnesscoder.top/amado/)，\n    视频讲解 [www.bilibili.com/video/BV1M54y1z7K5/](https://www.bilibili.com/video/BV1M54y1z7K5/) \n    项目已开源 地址[github.com/jintaozhou/Amado-Shopping-mall-website](https://github.com/jintaozhou/Amado-Shopping-mall-website)\n\n自我评价\n----\n\n1. 在大学学习生活过程中，对新鲜知识、事物的学习比较快。\n2. 对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新。\n3. 性格开朗，有耐心，不乱发脾气，责任心强，肯吃苦耐劳。\n4. 具有良好的沟通能力、良好的团队合作精神。\n\n\n社交平台&&联系方式\n----\n\n* [bilibili] (https://space.bilibili.com/292018435)\n* [个人作品集] (http://www.fitnesscoder.top)\n* [个人博客] (http://blog.fitnesscoder.top/)\n* Tel:17863960527\n* Email:1352215207@qq.com\n\n> 未完待续，\n 欢迎[与我交流](mailto:1352215207@qq.com)，谢谢观看！\n\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,l,c,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},47:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),s=e.n(i),a=e(24),u=e.n(a),l=e(42),c=e.n(l),d=e(41),h=e.n(d),m=e(40);e.n(m);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n*\n* 你好，我是周锦涛\n* 好多公司正在招聘，我也来写一份简历，说做就做\n*\n* 这是我的一份简历，请看！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"周锦涛\n----\n2017.9-至今就读于青岛理工大学琴岛学院计算机科学与技术专业\n求职意向:后端开发工程师\n\n主修课程\n----\n\n* 高等数学、大学英语、离散数学\n* 思科网络技术、数据库、操作系统\n* Linux服务器搭建、动态网站开发\n* C++语言、Python语言、Java语言、PHP语言\n\n个人荣誉\n----\n\n1. 2017-2018学年第一学期学院三等奖学金\n2. 2017-2018学年第二学期学院三等奖学金\n3. 2018-2019学年第二学期学院三等奖学金\n4. 2019-2020学年第一学期学院三等奖学金\n5. 大二期间参加参加志愿者活动，荣获“优秀志愿者”证书\n6. 取得CET4全国大学生英语四级考试证书，具有良好的听说读写能力\n7. 取得NCR全国计算机等级考试二级Python证书\n\n项目经历\n----\n\n* 2020.3      简约在线留言板项目\n    这是今年学习php中关于连接数据库的一些操作时写的练手项目。\n    项目预览地址 [www.fitnesscoder.top/message/](http://www.fitnesscoder.top/message/)\n    项目已开源 地址[github.com/jintaozhou/PHP-Message](https://github.com/jintaozhou/PHP-Message)\n* 2020.4       宠物商城项目\n    这是一个老师带着练习的项目，熟悉网站开发的过程，包括前端的制作、数据库的设计以及后台的开发等。 \n    项目已经部署，预览地址[www.fitnesscoder.top/petshop/](http://www.fitnesscoder.top/petshop/)\n    项目已开源 地址[github.com/jintaozhou/petshop](https://github.com/jintaozhou/petshop)\n* 2020.5-2020.6    Amado北欧家具商城网站项目\n    这是我大三下学期结束课程设计，前端基于bootstrap,界面时尚美观。简洁的后台，管理商品、规格属性\n    以及前内内容等功能基于php+mysql。丰富多样功能，搜索、购物车、订单等。完整购物流程，多端支持，\n    适配不同客户端用户使用，项目已经部署。\n    项目预览地址 [www.fitnesscoder.top/amado/](http://www.fitnesscoder.top/amado/)，\n    视频讲解 [www.bilibili.com/video/BV1M54y1z7K5/](https://www.bilibili.com/video/BV1M54y1z7K5/) \n    项目已开源 地址[github.com/jintaozhou/Amado-Shopping-mall-website](https://github.com/jintaozhou/Amado-Shopping-mall-website)\n\n自我评价\n----\n\n1. 在大学学习生活过程中，对新鲜知识、事物的学习比较快。\n2. 对互联网产品和技术有浓厚的兴趣，热衷于追求技术极致与创新。\n3. 性格开朗，有耐心，不乱发脾气，责任心强，肯吃苦耐劳。\n4. 具有良好的沟通能力、良好的团队合作精神。\n\n\n社交平台&&联系方式\n----\n\n* [bilibili] (https://space.bilibili.com/292018435)\n* [个人作品集] (http://www.fitnesscoder.top)\n* [个人博客] (http://blog.fitnesscoder.top/)\n* Tel:17863960527\n* Email:1352215207@qq.com\n\n> 未完待续，\n 欢迎[与我交流](mailto:1352215207@qq.com)，谢谢观看！\n\n\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,l,c,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},48:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(89),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(90),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(45),o=e(43),i=e.n(o),s=e(44),a=e.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,t){},86:function(n,t){},87:function(n,t){},88:function(n,t){},93:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.c495ca2228f114e2829c.js.map