const state = () => ({
  _AUTH: false,
  _USER: null
})

const getters = {
  getAuth: state => state._AUTH,
  getUser: state => state._USER
}

const mutations = {
  SIGNIN: (state, user) => {
    state._AUTH = true
    state._USER = user
  }
}

const actions = {
  signup (store, { form, $notify }) {
    this.$axios.post('/api/auth/signup', form).then((response) => {
      this.app.router.push('/signin')
      $notify({
        group: 'foo',
        title: 'Регистрация успешна',
        text: response.data.msg,
        type: 'success'
      })
    }).catch((error) => {
      $notify({
        group: 'foo',
        title: `ERROR: ${error.response.status}`,
        text: error.response.data.msg,
        type: 'error'
      })
    })
  },
  signin ({ commit, dispatch }, { form, $notify }) {
    this.$axios.post('/api/auth/signin', form).then((response) => {
      localStorage.setItem('token', response.data.token)
      this.$axios.onRequest((config) => {
        config.headers.common.Authorization = `Bearer ${response.data.token}`
      })
      dispatch('getUser', { $notify })
      this.app.router.push('/')
    }).catch((error) => {
      $notify({
        group: 'foo',
        title: `ERROR: ${error.response.status}`,
        text: error.response.data.msg,
        type: 'error'
      })
    })
  },
  getUser ({ commit }, { $notify }) {
    this.$axios.get('/api/auth/user').then((resp) => {
      commit('SIGNIN', resp.data.user)
      if ($notify) {
        $notify({
          group: 'foo',
          title: 'Регистрация успешна',
          text: resp.data.msg,
          type: 'success'
        })
      }
    }).catch((err) => {
      $notify({
        group: 'foo',
        title: `ERROR: ${err.response.status}`,
        text: err.response.data.msg,
        type: 'error'
      })
    })
  }
}

export default {
  state, getters, mutations, actions
}
