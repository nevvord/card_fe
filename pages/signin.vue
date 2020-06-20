<template lang="pug">
  .container
    form(@submit.prevent="signin")
      .title Авторизация
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
        label(for="password") Пароль:
        input(
          id="password"
          type="password"
          name="password"
          v-model="form.password"
          placeholder="Пароль"
        )
      .button
        button(type='submit') Вход
</template>
<script>
export default {
  data () {
    return {
      form: {
        login: null,
        password: null
      }
    }
  }
}
</script>
