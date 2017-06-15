<template>
  <div class="dashboard">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'dashboard',
  methods: {
    ...mapActions([
      'getLights'
    ])
  },
  async created () {
    await this.getLights()
  }
}
</script>

<style lang="scss" scoped>
@import '../app.global.scss';

.dashboard {
  width: 100%;
  height: 100%;
  background: $dark-grey;
}
</style>
