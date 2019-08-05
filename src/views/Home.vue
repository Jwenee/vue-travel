<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'
import HomeSwiper from '@/components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
  }
}
</script>

<style lang="stylus" scoped>

</style>

