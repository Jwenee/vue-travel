<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet
      :cities="cities"
      @change="handleChange"
    >
    </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'
import CityList from '@/components/CityList.vue'
import CityAlphabet from '@/components/CityAlphabet.vue'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json')
           .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res) {
      res = res.data.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange(letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
