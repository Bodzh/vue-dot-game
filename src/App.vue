<template>
  <div id="app">
    <settings @onSettingChanged="onSettingChanged"></settings>
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board'
import Settings from './components/settings'
export default {
  name: 'app',
  data: function () {
    return {
      currentSetting: {}
    }
  },
  components: {
      'board': Board,
      'settings': Settings
  },
  methods: {
    onSettingChanged (data) {
      this.currentSetting = data;
      console.log('setting changed ', this.currentSetting)
    }
  }
}
</script>

<style>
#app {

}
</style>
