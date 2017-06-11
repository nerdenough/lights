<template>
  <div class="setup-form">
    <h1 class="title">Lights</h1>
    <input class="address" type="text" v-model="address" placeholder="Your Hue IP Address">
    <p class="error" v-if="error">{{ error }}</p>
    <button class="submit" v-if="!inProgress" @click="connect(address)">Connect</button>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import Spinner from '@/components/shared/Spinner'

export default {
  name: 'setup-page',
  components: {
    Spinner
  },
  props: {
    error: String,
    inProgress: Boolean,
    connect: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    address: ''
  })
}
</script>

<style lang="scss" scoped>
@import '../../app.global.scss';

.setup-form {
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
    margin-bottom: 10px;
    padding: 20px;
    @include border;
    @include box-sizing;

    &::placeholder {
      color: $medium-grey;
    }
  }

  .error {
    color: $red;
    font-size: 16px;
  }

  .submit {
    background: $green;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin-top: 10px;
    padding: 20px;
    @include border;
  }
}
</style>
