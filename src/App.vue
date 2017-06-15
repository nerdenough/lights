<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    const { address, username } = this.$store.state
    if (!address || !username) {
      this.$router.push({ name: 'setup' })
    }
  }
}
</script>

<style lang="scss">
@import './app.global.scss';

#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
