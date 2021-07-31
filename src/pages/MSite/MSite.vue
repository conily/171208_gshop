<template>
  <div class="">
    <section class="msite">
      <!--首页头部-->

      <header-top :title="address.name">
        <router-link class="header_search" slot="left" to='/search'>
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link class="header_login" slot="right" :to="userInfo._id?'/userInfo':'/login'">
          <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
          <span class="header_login_text" v-else><i class="iconfont icon-wode-copy"></i></span>
           
        </router-link>
      </header-top>

      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="categorys.length">
            <div
              class="swiper-slide"
              v-for="(categorys, index) in categorysArr"
              :key="index"
            >
              <a
                href="javascript:"
                class="link_to_food"
                v-for="(category, index) in categorys"
                :key="index"
              >
                <div class="food_container">
                  <img :src="imgBaseUrl+category.image_url" />
                </div>
                <span>{{category.title}}</span>
              </a>
              <!-- <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/2.jpg" />
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/3.jpg" />
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/4.jpg" />
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/5.jpg" />
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/6.jpg" />
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/7.jpg" />
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/8.jpg" />
                </div>
                <span>土豪推荐</span>
              </a> -->
            </div>
          </div>
          <div class="swiper-wrapper" v-else>
            <img class="shop_img" src="./images/nav/msite_back.svg" />
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <shop-list></shop-list>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";

import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  data () {
return {
imgBaseUrl: 'https://fuss10.elemecdn.com'
}
},
  mounted() {
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
    
    
  },

  components: {
    HeaderTop,
    ShopList,
  },
  computed: {
    ...mapState(["address", "categorys","userInfo"]),
    // 根据categorys一维数组生成二维数组（因为在轮播图里面每页最大有八个元素，但是我们一共有16个元素
    categorysArr() {
      const max = 8;
      const arr = [];
      const { categorys } = this;
      let smallArr = [];
      categorys.forEach((c, index) => {
        if (smallArr.length === 0) {
          arr.push(smallArr);
        }
        smallArr.push(c);
        if (smallArr.length === max) {
          smallArr = [];
        }
      });
      return arr;
    },
  },
  // updated(){
  //   new Swiper(".swiper-container", {
  //     loop: true, // 循环模式选项

  //     // 如果需要分页器
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //   })
  // },
  watch:{
    categorys(value){
      this.$nextTick(()=>{
        // 创建一个swiper实例对象，实现轮播
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    })
      })
    }
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.msite // 首页
  width 100%

  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          .link_to_food
            width 25%

            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
