<template>
  <div class="content">
    <div class="cons clearFix">
      <p>密码已重置</p>
      <p>请牢记新的密码<br>打开Fusion输入账号及新的密码登陆</p>
      <button>关闭</button>
    </div>
  </div>
</template>

<script >
export default{
  name: 'finish',
  data () {
    return {
      msg: 'Welcome to Your finish.js App'
    }
  }
};
</script>

<style type="text/css" scoped>
*{
  margin: 0;
  padding: 0
}
.clearFix:before,
.clearFix:after{
  content: " ";
  display: table;
  clear: both;
}
.content{
  width: 1440px;
  height: 892px;
}
.content .cons{
  margin: 0 auto;
  width: 240px;
}
.content .cons p:nth-of-type(1){
  margin-top: 77px;
  line-height: 45px;
  font-size: 30px;
  color: #5A5E66;
  letter-spacing: 0px;
}
.content .cons p:nth-of-type(2){
  margin-top: 28px;
  margin-bottom: 28px;
  line-height: 18px;
  font-size: 14px;
  color: #5A5E66;
}
.content .cons button{
  width: 98px;
  height: 36px;
  border-radius: 4px;
  background-color: #409EFF;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  border:none;
}
</style>
