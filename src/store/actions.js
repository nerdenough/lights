import Vue from 'vue'

async function authenticate ({ commit }, { address }) {
  const res = await Vue.http.post(`http://${address}/api`, {
    devicetype: 'lights#web'
  }).then(res => res.body[0])

  if (res.error) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(authenticate({ commit }, { address }))
      }, 1000, address)
    })
  }

  commit('setUsername', { username: res.success.username })
}

async function connect ({ commit }, { address }) {
  await Vue.http.get(`http://${address}/api/test/config`)
  commit('setAddress', { address })
}

export const actions = {
  authenticate,
  connect
}
