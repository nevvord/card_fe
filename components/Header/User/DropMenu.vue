<template lang="pug">
.user-drop-menu
  .user-drop-menu__item(@click="logout({ $notify }); toggleDropDownMenu();") Выход
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['toggleDropDownMenu'],
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.user-drop-menu {
  position: absolute;
  top: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  border-radius: 8px;
  &__item {
    padding: .5rem;
    color: #000;
    &:hover {
      color: map-get($mainColors, caral);
    }
  }
}
</style>
