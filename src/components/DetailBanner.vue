<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1907/43/434697bdffd1475fa3.water.jpg_600x330_3a0f0c8d.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">乐岛海洋王国(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67f;</span>21
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from './CommonGallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data() {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1907/ef/ef42d0ea81109d30a3.water.jpg_r_800x800_6b55c88a.jpg',
        'http://img1.qunarzz.com/sight/p0/1907/a4/a45520e3029da303a3.water.jpg_r_800x800_e9e7ac09.jpg']
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
  // 防止图片未加载时抖动
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #ffffff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
