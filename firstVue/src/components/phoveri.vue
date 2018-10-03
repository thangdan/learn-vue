<template>
  <div class="content clearFix">
    <div class="cons">
      <p>重置密码</p>
      <p>请先验证手机号</p>
      <p ref='warn'>{{warning}}</p>
      <input type='text' name="mobile" placeholder="手机号码" v-on:blur="test2" v-on:focus='foucusevent' v-model='mobile' v-on:keyup.enter='test2'>
      <input type="text" name="code" placeholder="验证码" v-model='code' v-on:blur="codetest" v-on:focus='foucusevent' v-on:keyup.enter='codetest'>
      <input type="button" name="button" :value="send" ref="btn" v-on:click="test" :disabled="disabled1">
      <p>设置密码</p>
      <p ref='passw'>两次输入的密码不一致</p>
      <input type="password" name="password" placeholder="6-20位字母与数字组合" v-model='password1' v-on:focus="foucusevent" :disabled="disabled2">
      <input type="password" name="code" placeholder="请再次输入新的密码" v-on:blur='passwordblur' v-model='password2' v-on:focus="foucusevent" v-on:keyup.enter='passwordblur' :disabled="disabled2">
      <button type="submit" :disabled="disabled" ref='sumitbtn' v-on:click='submitbtn'>完成</button>
      <p>通过邮箱找回密码</p>
    </div>
  </div>
</template>


<script type="text/javascript">
import qs from 'qs';
import axios from 'axios';

export default{
  name: 'phoveri',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mobile:'',
      disabled: true,
      disabled1: true,
      disabled2: true,
      warning: '',
      send:'发送验证码',
      time:0,
      status: '',
      code: '', //验证码
      password1: '',
      password2: ''
    }
  },
  methods: {
  	test: function(){
  	  //this.$refs.btn.style.backgroundColor="#ff0000"
  	  console.log("hellos");
  	  this.time=60;
  	  this.timer();
  	  var url='http://test.fusion.d5techs.com:8084/user/findPassword/mobile/sendCode';
  	  this.$http.post(url,{mobile: this.mobile},{emulateJSON:true}).then((response)=>{
      console.log("hello dandan");
      console.log(response.body);},(erro) =>{
      console.log(erro);
      this.status=erro.body.code;
      /*
      if (this.status=='2003') {
        console.log("手机号码没有注册");
        this.$refs.warn.style.display='block';
        this.warning="手机号码没有注册";
      }else if (this.status=='2008') {
        this.$refs.warn.style.display='block';
        this.warning="手机格式错误";
      }else if (this.status=='2009') {
        this.$refs.warn.style.display='block';
        this.warning="30s 内重复提交";
      }else if (this.status=='2012') {
        this.$refs.warn.style.display='block';
        this.warning="发送短信错误";
      }else{
        this.$refs.warn.style.display='block';
        this.warning="其他情况错误";
      }*/
    });


  	},
  	test2: function(){
  	 console.log("失去焦点");
  	 console.log(this.mobile);
  	 var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
  	 if (this.mobile=='') {
       this.$refs.warn.style.display='block';
       this.warning="请输入手机号"
  	 }else if (!reg.test(this.mobile)) {
  	   this.$refs.warn.style.display='block';
  	   this.warning="手机格式不正确"
  	 }else{
      if (this.time > 0) {
        this.disabled1=true;
      }else{
         this.disabled1=false; 
      }
  	 	
  	 }
  	},
  	foucusevent: function(){
  	  this.$refs.warn.style.display='none';
      this.$refs.passw.style.display='none';
  	 },
  	 timer:function(){
  	   if (this.time>0) {
  	     this.time--;
  	     this.send = '重新发送(' + this.time + 's)';
  	     this.disabled1= true;
  	     var timer = setTimeout(this.timer,1000);
  	   }else if(this.time == 0){
  	   	this.send = '获取验证码';
  	   	clearTimeout(timer);
  	   	this.disabled1 = false;
  	   }

  	 },
    codetest: function(){
    if (this.code.toString().length != 6) {
      this.$refs.warn.style.display='block';
      this.warning="验证码必须为6位";
    }else{
      this.disabled2=false;
    }
  },
  codefocus: function(){
    this.$refs.warn.style.display='none';
  },
  passwordblur: function(){
    if (this.password1 != this.password2) {
      this.$refs.passw.style.display='block';
    }else if ((!! this.code )&&(!! this.mobile) ) {
      this.disabled = false;
      this.$refs.sumitbtn.style.backgroundColor= '#409EFF';
    }
  },
  submitbtn: function(){
    var url='http://test.fusion.d5techs.com:8084/user/findPassword/mobile/resetPassword';
    this.$http.post(url,{mobile: this.mobile,code: this.code,password: this.password2},{emulateJSON:true}).then((response)=>{
      console.log("hello dandan++++");
      console.log(response.body);
      this.$router.push({path: '/finish'});
      },(erro) =>{
      console.log(erro);
      this.status=erro.body.code;
    });
    
  }
  }

};
</script>

<style scoped >
*{
  margin: 0; 
  padding: 0;
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
  margin: 64px auto;
  width: 275px;
  height: 500px;
}
.content .cons p{
   color: #5A5E66;
}
.content .cons p:nth-of-type(1){
  font-size: 30px;
  margin-bottom: 38px;
}
.content .cons p:nth-of-type(2){
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 24px;
}
.content .cons p:nth-of-type(3){
  display: none;
  line-height: 17px;
  font-size: 12px;
  color: #D72A3E;
}
.content .cons  p:nth-of-type(4){
  line-height: 24px;
  font-size: 14px;
  margin-top: 19px;
  margin-bottom: 8px;
}
.content .cons p:nth-of-type(5){
  display: none;
  line-height: 17px;
  font-size: 12px;
  color: #D72A3E;

}
.content .cons > input{
  border: 1px solid #D8DCE5;
  font-size: 14px;
  color: #B4BCCB;
  box-sizing: border-box;
  padding: 12px 11px;
  height: 36px;
}
.content .cons > input:nth-of-type(1){
  width: 275px;
  margin-bottom: 8px;
}
.content .cons > input:nth-of-type(2){
  width: 165px;
}
.content .cons > input:nth-of-type(3){
  float: right;
  width: 110px;
  height: 36px;
  background-color: #fff;
  padding: 11px 12px;
  box-sizing: border-box;
  color: #B4BCCB;
  font-size: 14px;
  border:none;
  vertical-align: bottom;
  line-height: 14px;
  border: 1px solid #D8DCE5;
}
.content .cons  input:nth-of-type(4){
  margin-top: 16px;
  padding: 10px 12px 12px 12px;
}
.content .cons> input:nth-of-type(5){
  padding: 10px 12px 12px 12px;
  margin-top: 8px;
}
.content .cons  > button:nth-of-type(1){
  color: #fff;
  width: 98px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  background-color: #CACACB;
  border-radius: 4px;
  border:none;
  margin-top: 24px;
}

.content .cons p:nth-of-type(6){
  line-height: 21px;
  font-size: 14px;
  color: #409EFF;
  margin-top: 32px;
}
input::-webkit-input-placeholder{
  color: #B4BCCB;
}
input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
  color: #B4BCCB;
}
input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
  color: #B4BCCB;
}
input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
  color: #B4BCCB;
    }
</style>