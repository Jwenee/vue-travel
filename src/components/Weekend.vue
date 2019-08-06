<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- 1px边框border-bottom引入的reset -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
        title: '乐岛海洋王国',
        desc: '山海关区'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
        title: '乐岛海洋王国',
        desc: '山海关区'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/58/ebdb4ae5c789be.jpg_r_640x214_21321088.jpg',
        title: '乐岛海洋王国',
        desc: '山海关区'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eeeeee
    text-indent: .2rem
  .item-img-wrapper
    // 自动撑开里面的图片宽高
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%

  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #cccccc
      ellipsis()

</style>
