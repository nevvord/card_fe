<template lang="pug">
.user(@click="toggleDropDownMenu") {{login}}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['toggleDropDownMenu'],
  computed: {
    ...mapGetters({
      login: 'auth/getUserLogin'
    })
  }
}
</script>
