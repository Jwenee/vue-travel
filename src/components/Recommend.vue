<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 1px边框border-bottom引入的reset -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">

        <img class="item-img" :src="item.imgUrl" alt="">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/43/434697bdffd1475fa3.water.jpg_200x200_1184ab09.jpg',
        title: '乐岛海洋王国',
        desc: '山海关区'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/43/434697bdffd1475fa3.water.jpg_200x200_1184ab09.jpg',
        title: '乐岛海洋王国',
        desc: '山海关区'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/43/434697bdffd1475fa3.water.jpg_200x200_1184ab09.jpg',
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      // min-width: 0让里面的内容超出后显示...
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #cccccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        color: #ffffff
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem

</style>
