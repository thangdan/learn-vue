<template>
  <div class="content clearFix">
  <div class="cons clearFix">
  <p>忘记密码</p>
  <div>
    <router-link to="/home" class="router" >
      <div><img src='./../assets/email.svg'></div>
        <span>邮箱找回</span>
    </router-link>
    <router-link to="/phoveri" class="router">
      <div><img src='./../assets/mobile.svg'></div>
        <span>手机找回</span>
    </router-link>
   </div>
   </div>
  </div>
</template>

<script type="text/javascript">
export default{
  name: 'forget',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.clearFix:before,
.clearFix:after{
  content: " ";
  display: table;
  clear:both;
}
.content{
   width: 1440px;
   height: 892px;
}
.content .cons{
	margin: 0 auto;
	width: 350px;
	height: 400px;
}
.content > .cons > p{
  margin-top: 64px;
  font-size: 30px;
}
.content > .cons >div{
  text-align: center;
}
.content > .cons >div > .router{
  display: block;
  margin-top: 40px;
  box-sizing: border-box;
  float: left;
  width: 160px;
  height: 160px;
  text-decoration: none;
  border:1px solid #D8DCE5 ;
}
.content > .cons >div > .router:nth-of-type(2){
  margin-left: 30px;
}
.content > .cons >div > .router >div{
  margin: 0 auto;
  width:48px;
  height: 48px;
  text-align: center;
  vertical-align: middle;
  margin-top: 32px;
}
.content > .cons >div > .router > span{
  width: 56px;
  display: block;
  margin: 26px auto;
  font-size: 14px;
  color:#5A5E66 ;
  text-decoration: none;

}
.content > .cons >div > .router >div img{
  margin-top: 24px;
  transform: translateY(-50%);
  vertical-align: middle;
}
</style>
