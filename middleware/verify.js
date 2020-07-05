export default async ({ $axios, store, redirect, route }) => {
  const token = localStorage.getItem('token')
  if (!token) { return '' }
  await $axios.get('/api/auth/user').then((response) => {
    store.dispatch('auth/signin')
    store.dispatch('auth/updateUser', response.data.user)
    const accesses = response.data.user.accesses
    let redir = true
    accesses.map((access) => {
      if (access === route.name || route.name === 'profile') { redir = false }
    })
    if (redir) {
      accesses.map((access) => {
        const namesPath = route.fullPath.split('/')
        namesPath.map((path) => {
          if (access === path || path === 'profile') { redir = false }
        })
      })
    }
    if (redir) {
      store.dispatch('sideBar/changeBar', '')
      redirect('/')
    }
  }).catch(() => {
    return redirect('/')
  })
}
