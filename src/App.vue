<template>
  <div id="app" class="d-flex flex-row justify-content-around">
    <div class="d-flex flex-column align-items-center">
      <settings @onSettingChanged="onSettingChanged"></settings>
      <board :settings="currentSetting"></board>
    </div>
    <dashboard></dashboard>
  </div>
</template>

<script>
import Board from './components/Board'
import Settings from './components/Settings'
import Dasboard from './components/Dashboard'

export default {
  name: 'app',
  data: function () {
    return {
      currentSetting: {
        field: 5,
        delay: 2000
      }
    }
  },
  components: {
      'board': Board,
      'settings': Settings,
      'dashboard': Dasboard
  },
  methods: {
    onSettingChanged (data) {
      this.currentSetting = data;
    }
  }
}
</script>

<style>
#app {

}
</style>
