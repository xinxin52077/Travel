<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
    :cities="cities" 
    :hot="hotCities" 
    :letter="letter"
    ></city-list>
    <city-alphabet 
    :cities="cities" 
    @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '../components/CityHeader'
import CitySearch from '../components/CitySearch'
import CityList from '../components/CityList'
import CityAlphabet from '../components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('./json/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      // console.log(res)
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter;
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>