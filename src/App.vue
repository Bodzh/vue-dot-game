<template>
  <div id="app" class="d-flex flex-row justify-content-around">
    <div class="d-flex flex-column align-items-center">
      <settings @onSettingChanged="onSettingChanged" @onStarted="onStarted"></settings>
      <board :settings="currentSetting" :gameStatus="gameStatus"></board>
    </div>
    <dashboard></dashboard>
  </div>
</template>

<script>
import Board from './components/Board';
import Settings from './components/Settings';
import Dasboard from './components/Dashboard';
import {GameStatus} from '@/constants';

export default {
  name: 'app',
  data: function () {
    return {
      currentSetting: {
        field: 5,
        delay: 2000
      },
      gameStatus: GameStatus.stopped
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
    },
    onStarted () {
      this.gameStatus = GameStatus.started;
    }
  }
}
</script>

<style>
#app {

}
</style>
