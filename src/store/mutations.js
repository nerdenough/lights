export const state = {
  address: null,
  username: null
}

export const mutations = {
  setAddress (state, { address }) {
    state.address = address
  },
  setUsername (state, { username }) {
    state.username = username
  }
}
