export const state = {
  address: null,
  username: null,
  lights: null
}

export const mutations = {
  address (state, { address }) {
    state.address = address
  },
  username (state, { username }) {
    state.username = username
  },
  lights (state, { lights }) {
    state.lights = lights
  }
}
