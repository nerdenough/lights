<template>
  <div class="setup">
    <div class="form">
      <h1 class="title">Lights</h1>
      <input class="address" type="text" v-model="address" placeholder="Your Hue IP Address">
      <p class="error" v-if="error">{{ error }}</p>
      <button class="submit" @click="connect">Connect</button>
    </div>
  </div>
</template>

<script>
async function getUsername () {
  const res = await this.$http.post(`http://${this.address}/api`, {
    devicetype: 'lights#web'
  }).then(res => res.body[0])

  if (res.error) {
    setTimeout(this.getUsername, 1000)
    console.log('press link')
  } else {
    const username = res.success.username
    console.log(username)
  }
}

async function connect () {
  try {
    await this.$http.get(`http://${this.address}/api/test/config`)
    await this.getUsername()
  } catch (err) {
    this.error = 'Unable to find a Hue bridge at this address!'
  }
}

export default {
  name: 'setup',
  data: () => ({
    address: '',
    error: null
  }),
  methods: {
    connect,
    getUsername
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
