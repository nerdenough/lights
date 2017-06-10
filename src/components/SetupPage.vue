<template>
  <div class="setup">
    <form class="form">
      <h1 class="title">Lights</h1>
      <input type="text" class="address" v-model="address" placeholder="Your Hue IP Address">
      <button class="submit">Connect</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'setup',
  data: () => ({
    address: ''
  })
}
</script>

<style lang="scss" scoped>
@import '../app.global.scss';

.setup {
  width: 100%;
  height: 100%;
  background: $dark-grey;
}

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 320px;
  min-width: 280px;
  text-align: center;

  .title {
    color: white;
    font-size: 48px;
    margin-bottom: 20px;
  }

  .address {
    width: 100%;
    color: $medium-grey;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    outline: none;
    padding: 20px;
    @include border;
    @include box-sizing;

    &::placeholder {
      color: $medium-grey;
    }
  }

  .submit {
    background: $green;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin-top: 20px;
    padding: 20px;
    @include border;
  }
}
</style>
