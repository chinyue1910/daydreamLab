<template lang="pug">
  #app
    navbar
    section01
    section02
    section03
    section04
    section05
    section06
    b-nav(pills card-header slot="header" v-b-scrollspy="{element: '#app', offset:540}").m-0.tab
      b-nav-item(href='#section01' :style="{'--bgcolor':bgcolor}") 首頁
      b-nav-item(href='#section02' :style="{'--bgcolor':bgcolor}") 啟動大會
      b-nav-item(href='#section03' :style="{'--bgcolor':bgcolor}") 贊助單位
      b-nav-item(href='#section04' :style="{'--bgcolor':bgcolor}") 產品館
      b-nav-item(href='#section05' :style="{'--bgcolor':bgcolor}") 玩活動
</template>

<script>
import navbar from './components/navbar'
import section01 from './components/section01'
import section02 from './components/section02'
import section03 from './components/section03'
import section04 from './components/section04'
import section05 from './components/section05'
import section06 from './components/section06'
export default {
  data () {
    return {
      section: 'section01'
    }
  },
  created () {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  methods: {
    onActivate (e) {
      this.section = e
    }
  },
  computed: {
    bgcolor () {
      return (this.section === '#section01' || this.section === '#section03') ? 'white' : '#aacd06'
    }
  },
  components: {
    navbar, section01, section02, section03, section04, section05, section06
  }
}
</script>

<style lang="scss">
* {
margin: 0;
padding: 0;
font-family: '微軟正黑體';
box-sizing: border-box;
scroll-behavior: smooth;
}
#app{
  position: relative;
  height: 100vh;
  overflow-y: scroll;
}
.tab{
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  text-align: end;
  a{
    color: transparent;
    position: relative;
    padding: 0;
    &::before{
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      right: 0;
      top: 50%;
      background-color: gray;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
  .nav-link.active{
    background-color: transparent;
    color: var(--bgcolor);
    margin-right: 20px;
    &::before{
      content: "";
      position: absolute;
      width: 20px;
      height: 2px;
      right: -20px;
      top: 50%;
      background-color: var(--bgcolor);
      transform: translateY(-50%);
      z-index: -1;
    }
  }
}
</style>
