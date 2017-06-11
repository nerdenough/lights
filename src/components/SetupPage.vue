<template>
  <div class="setup">
    <setup-form :connect="connect" :error="error" :inProgress="inProgress"></setup-form>
  </div>
</template>

<script>
import SetupForm from '@/components/SetupPage/SetupForm.vue'

async function getUsername (address) {
  const res = await this.$http.post(`http://${address}/api`, {
    devicetype: 'lights#web'
  }).then(res => res.body[0])

  if (res.error) {
    setTimeout(this.getUsername, 1000, address)
    console.log('press link')
  } else {
    const username = res.success.username
    console.log(username)
  }
}

async function connect (address) {
  this.inProgress = true
  this.error = null

  try {
    await this.$http.get(`http://${address}/api/test/config`)
    await this.getUsername(address)
  } catch (err) {
    this.error = 'Unable to find a Hue bridge at this address!'
  }

  this.inProgress = false
}

export default {
  name: 'setup',
  components: {
    SetupForm
  },
  data: () => ({
    error: null,
    inProgress: false
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
</style>
