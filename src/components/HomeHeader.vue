<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市|景点|游玩主题
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  // 1rem = html font-size = 50px reset文件定义(2倍屏100px)
  @import '~@/assets/styles/varibles.styl'
  .header
    display: flex
    // height: .86rem 86xp/100
    line-height:.86rem
    color: #ffffff
    background: $bgColor
    .header-left
      width: .86rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
    // 自动撑开
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      color: #cccccc
      background: #ffffff
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
