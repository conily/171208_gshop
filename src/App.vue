<template>
  <div class="app">
    <router-view/>
    
    <footer-guide v-show="$route.meta.showFooter"/>

  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'

export default {
  // 触发action中的某一个事件
   mounted(){
    this.getAddress()
    this.getUserInfo()
  },
 

  components: {
    FooterGuide
  },
  data() {
    return {};
  },
  // 使用mapaction的方法调用actions中的getAddress方法更新地址的状态
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>

