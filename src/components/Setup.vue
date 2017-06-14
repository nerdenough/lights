<template>
  <div class="setup">
    <div class="setup-form">
      <h1 class="title">Lights</h1>
      <p class="info" v-if="authenticating">Press the button on your Hue bridge to finish connecting</p>
      <input class="address" v-else type="text" v-model="address" placeholder="Your Hue IP Address">
      <p class="error" v-if="error">{{ error }}</p>
      <button class="submit" v-if="!inProgress" @click="submit()">Connect</button>
      <spinner v-else></spinner>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Spinner from '@/components/shared/Spinner'

async function submit () {
  const address = this.address
  this.inProgress = true
  this.error = null

  await this.connect({ address }).catch(() => {
    this.inProgress = false
    this.error = 'Unable to find a Hue bridge at this address!'
  })

  if (this.error) {
    return
  }

  this.authenticating = true

  await this.authenticate({ address }).catch(() => {
    this.authenticating = false
    this.inProgress = false
    this.error = 'Unable to authenticate with the Hue bridge'
  })

  if (!this.error) {
    this.$router.push({ name: 'dashboard' })
  }
}

export default {
  name: 'setup',
  components: {
    Spinner
  },
  data: () => ({
    authenticating: null,
    error: null,
    address: '',
    inProgress: false
  }),
  methods: {
    ...mapActions([
      'authenticate',
      'connect'
    ]),
    submit
  }
}
</script>

<style lang="scss" scoped>
@import '../app.global.scss';

.setup {
  width: 100%;
  height: 100%;
  background: $dark-grey;
}

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

  .info {
    color: white;
    font-size: 16px;
    margin-bottom: 10px;
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
