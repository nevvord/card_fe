<template lang="pug">
#admin_header
  .header
    .header__logo
      span A
    .header__items
      nuxt-link.header__items__item(to="/") Главная
      nuxt-link.header__items__item(to="/admin/cards") Карты
      nuxt-link.header__items__item(to="/admin/decks") Колоды
      nuxt-link.header__items__item(to="/admin/generals") Генералы
    .header__user
      span {{login}}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      login: 'auth/getUserLogin'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

$padding: .5rem 1rem;

.header {
  @include displayFlex;
  background-color: map-get($mainColors, dark);
  &__logo {
    font-size: 16px;
    font-weight: bold;
    color: map-get($mainColors, caral);
    background-color: #00000040;
    padding: $padding;
  }
  &__items {
    margin: 0 auto 0 0;
    &__item {
      padding: $padding;
      color: map-get($mainColors, light);

      &:hover {
        box-shadow: inset 0 -2px 0 map-get($mainColors, caral);
      }
    }
  }
  &__user {
    margin-left: auto;
    color: #fff;
    font-weight: bold;
    text-transform: capitalize;
    padding: $padding;
  }
}
</style>
