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
          placeholder="Имя пользователя"
        )
      .button
        button(type='submit') Вход
</template>
<script>
export default {
  data () {
    return {
      form: {
        login: null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

form {
  margin: 10% auto;
  background-color: map-get($mainColors, light);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #00000040;
  .title {
    text-align: center;
    font-size: 22px;
    padding: 0 1rem 1rem;
    font-weight: 900;
    color: map-get($mainColors, dark);
  }
  .form-group {
    position: relative;
    label {
      display: block;
      font-size: .9rem;
      width: 80%;
      margin: 0 auto;
      color: #3e3e3e;
    }
    input {
      display: block;
      margin: 0 auto;
      width: 80%;
      border: 2px solid #999;
      border-radius: 6px;
      padding: .5rem;
      outline: none;
      font-size: 1rem;
      &:focus {
        border-color: map-get($mainColors, caral);
      }
    }

    &:nth-child(3) {
      margin-top: 24px;
    }
  }

  .button {
    padding: 1rem;
    text-align: right;
    width: 80%;
    margin: 0 auto;
    button {
      cursor: pointer;
      padding: .5rem;
      outline: none;
      background: none;
      border: 2px solid #333;
      border-radius: 4px;
      font-size: 1rem;
      padding: .5rem 1.2rem;
      &:hover {
        border-color: map-get($mainColors, caral);
        color: map-get($mainColors, caral);
      }
    }
  }
}
</style>
