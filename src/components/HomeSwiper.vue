<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }

}
</script>

<style lang="stylus" scoped>
// >>>样式穿透，因为scoped作用于本组件内，而swiper是另一个组件,改变指示定颜色
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    // 元素相对于自己的宽度撑开26%高度（内部图片宽高比）图片宽高自适应,另一种写法：width：100%， height：39vw
    // 避免区域内图片没加载时高度为0导致下方内容位置出现从上到下的闪动
    padding-bottom: 27%
    background: #eeeeee
    .swiper-img
      width: 100%
</style>
