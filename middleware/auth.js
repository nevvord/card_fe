export default function ({ store, $router }) {
  if (store.state.auth._AUTH) {
    $router.push('/')
  }
}
