<template>
   <div>
     <p>{{msg}}</p>
       <router-link to='/HelloWorld'>hello</router-link>
  </div>
</template>

<script >
export default{
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
