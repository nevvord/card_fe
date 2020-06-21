export default ({ store, $axios }) => {
  const token = localStorage.getItem('token')
  if (!token) { return '' }
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${token}`
  })
  store.dispatch('auth/getUser', { $notify: false })
}
