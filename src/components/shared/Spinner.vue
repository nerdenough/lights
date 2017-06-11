<template>
  <i class="spinner fa fa-refresh fa-spin fa-3x fa-fw"></i>
</template>

<script>
export default {
  name: 'spinner'
}
</script>

<style lang="scss" scoped>
@import '../../app.global.scss';

.spinner {
  color: $green;
  font-size: 32px;
  padding: 10px;
}
</style>
