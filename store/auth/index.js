const state = () => ({
  _AUTH: false,
  _USER: null
})

const getters = {
  getAuth: state => state._AUTH,
  getUser: state => state._USER
}

export default {
  state, getters
}
