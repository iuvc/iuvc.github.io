"use strict";(self.webpackChunkiuvc_template=self.webpackChunkiuvc_template||[]).push([[996],{2159:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(6252),l=n(3577);var o=n.p+"dece10a76fb58b7097da.png";const s=e=>((0,a.dD)("data-v-efa3688e"),e=e(),(0,a.Cn)(),e),c={class:"lf-nav_wrapper"},r=s((()=>(0,a._)("img",{class:"lf-logo",src:o},null,-1))),i=s((()=>(0,a._)("span",{class:"lf-name"},[(0,a._)("span",null,"汪汪小窝"),(0,a._)("span",{class:"desc"},"冬天来了，裹紧我的小被子，再时不时翻个身耍手机~")],-1))),u=s((()=>(0,a._)("div",{class:"flex-grow"},null,-1)));const d=e=>((0,a.dD)("data-v-4c5a786c"),e=e(),(0,a.Cn)(),e),p={class:"lf-footer_wrapper"},m=d((()=>(0,a._)("a",{href:"https://github.com/iuvc",target:"_black",class:"iconfont ify-self-github"},null,-1))),f=d((()=>(0,a._)("a",{href:"https://blog.csdn.net/weixin_42927679?type=blog",target:"_black",class:"iconfont ify-self-csdn"},null,-1)));var h=n(3744);const g={};var v={name:"Navbar",components:{OtherBlogs:(0,h.Z)(g,[["render",function(e,t){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",p,[m,f,(0,a.Wm)(n,{to:"/about",tag:"a",class:"iconfont ify-self-bangzhu"})])}],["__scopeId","data-v-4c5a786c"]])},data:()=>({activeIndex:"home"}),mounted(){this.activeIndex=this.$route.name},methods:{handleSelect(e,t,n){console.log(e,t,n)}}};var _=(0,h.Z)(v,[["render",function(e,t,n,l,o,s){const d=(0,a.up)("router-link"),p=(0,a.up)("OtherBlogs"),m=(0,a.up)("el-menu");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(m,{"default-active":o.activeIndex,mode:"horizontal",ellipsis:!1,router:"",onSelect:s.handleSelect},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{to:"/home",tag:"span",class:"lf-logo_wrapper"},{default:(0,a.w5)((()=>[r,i])),_:1}),u,(0,a.kq)(' <el-menu-item index="home" route="home">首页</el-menu-item>\r\n      <el-menu-item index="about" route="about">介绍</el-menu-item> '),(0,a.Wm)(p)])),_:1},8,["default-active","onSelect"])])}],["__scopeId","data-v-efa3688e"]]);var b={name:"Content",components:{ElMessage:n(4284).z8},computed:{clientHeight:{get(){return this.$store.state.clientHeight}}},mounted(){},methods:{open(){}}};var w={name:"Layout",components:{Navbar:_,Content:(0,h.Z)(b,[["render",function(e,t,n,o,s,c){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",{class:"lf-content_wrapper",style:(0,l.j5)(`height: ${c.clientHeight}px`)},[(0,a.kq)(" <keep-alive> "),(0,a.Wm)(r),(0,a.kq)(" </keep-alive> ")],4)}]])},computed:{clientHeight:{get(){return this.$store.state.clientHeight}}},methods:{}};var k=(0,h.Z)(w,[["render",function(e,t,n,o,s,c){const r=(0,a.up)("Navbar"),i=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("div",{class:"lf-layout_wrapper",style:(0,l.j5)(`height: ${c.clientHeight}px`)},[(0,a.Wm)(r),(0,a.Wm)(i)],4)}]])}}]);