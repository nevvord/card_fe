<template lang="pug">
  footer
    .container
      p
      | &copy; 2020 | Шо картишки
</template>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

footer {
  background-color: map-get($mainColors, black );
  text-align: center;
  color: #fff;
  padding: 1rem;
}
</style>
