<template>
  <div id="app">
    <div class="head">
      <span>D I MENS I ON 5</span>
    </div>
    <router-view/>
    <div class="footer clearFix">
      <p>© 2017 DIMENSION 5. All rights reserved.</p>
      <p>南京维伍网络科技有限公司 版权所有 苏ICP备16020397号</p>
      <ul>
        <li>关于FUSION</li>
        <li>联系客服</li>
        <li>联系邮箱</li>
      </ul>
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
*{
  margin:0;
  padding:0;
}
.clearFix:after,
.clearFix:before{
  content: " ";
  display: table;
  clear: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.head{
  height:52px;
  width:1440px;
  background-color:#1D2129;
}
.head span{
  font-size:12px;
  letter-space:2px;
  color:#fff;
  line-height:52px;
}
.footer{
  width: 1440px;
  height: 80px;
  margin-bottom: 0px;
  background-color: #1D2129;
}
.footer ul{
  margin-left: 241px;
  margin-top: 40px;
  transform: translateY(-50%);
  list-style: none;
  height: 14px;
}
.footer ul li{
  width: 83px;
  float: left;
  line-height: 1em;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0px;
  text-align: center;
}
.footer ul li:nth-of-type(2){
  border-left:2px solid #fff;
  border-right: 2px solid #fff;
}
.footer p{
  float: right;
  font-size: 12px;
  line-height: 18px;
  color: #9B9B9B;
   margin-top: 40px;
  transform: translateY(-50%);

}
.footer p:nth-of-type(1){
margin-right: 231px;
margin-left: 16px;
}
</style>
