<template lang="pug">
  .container
    form(@submit.prevent="signup({form, $notify})")
      .title Регистрация
      .form-group
        label(for="login") Имя пользователя:
        input(
          id="login"
          type="text"
          name="login"
          v-model="form.login"
          placeholder="Имя пользователя"
        )
      .form-group
        label(for="login") Почтовый адресс:
        input(
          id="login"
          type="text"
          name="login"
          v-model="form.email"
          placeholder="Електронный адресс"
        )
      .form-group
        label(for="password") Пароль:
        input(
          id="password"
          type="password"
          name="password"
          v-model="form.password"
          placeholder="Пароль"
        )
      .button
        button(type='submit') Регистрация
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        login: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions({
      signup: 'auth/signup'
    })
  }
}
</script>
