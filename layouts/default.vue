<template lang="pug">
  div
    Header
    nuxt
    Footer
    notifications(group="foo" position="bottom right")
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
