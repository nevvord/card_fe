const state = () => ({
  _AUTH: false,
  _USER: null
})

const getters = {
  getAuth: state => state._AUTH,
  getUser: state => state._USER
}

const mutations = {
}

const actions = {
  signup ({ commit }, { form, notify }) {
    this.$axios.post('/api/auth/signup', form).then((response) => {
      notify({
        group: 'foo',
        title: 'Регистрация успешна',
        text: response.data.msg,
        type: 'success'
      })
    }).catch((error) => {
      notify({
        group: 'foo',
        title: `ERROR: ${error.response.status}`,
        text: error.response.data.msg,
        type: 'error'
      })
    })
  }
}

export default {
  state, getters, mutations, actions
}
