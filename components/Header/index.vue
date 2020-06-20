<template lang="pug">
  nav
    nuxt-link.logo(to="/")
      span ca
      span r
      span ts
    .nav-items
      nuxt-link.item(to="/info") Инфа
    .auth
      .autoresized-user(v-if="auth")
        .user Nevvord
      .un-autoresized-user(v-else)
        nuxt-link.signin(to="/signin") Авторизация
        nuxt-link.signup(to="/signup") Регистрация
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      auth: 'auth/getAuth',
      user: 'auth/getUser'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

$link-padding: .7rem 1.5rem;

@mixin link {
  display: block;
  color: white;
  font-size: 18px;
  font-weight: 100;
  padding: $link-padding;
};

nav {
  @include displayFlex;
  background: map-get($mainColors, dark);
  .logo {
    display: block;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    padding: .5rem 1rem;
    background-color: #00000030;
    width: fit-content;
    span {
      display: inline-block;
      transition: .3s;
    }

    span:nth-child(2) {
      transform: scalex(-1);
    }

    &:hover {
      span:nth-child(2) {
        color: map-get($mainColors, caral);
        transform: none;
      }
    }
  }

  .nav-items {
    margin: 0 auto 0 0;
    .item {
      @include link;
      &:hover {
        background: #ffffff10;
      }
    }
  }

  .auth {
    margin-left: auto;
    margin-right: 10px;
    .autoresized-user {

    }
    .un-autoresized-user {
      @include displayFlex;
      a {
        @include link;
        &:hover {
          border-bottom: 1px solid map-get($mainColors, caral);
          box-shadow: inset 0 -1px 0 map-get($mainColors, caral);
        }
      }
    }
  }
}
</style>
