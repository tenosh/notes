<template>
  <div :id="$style.app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // Init state with localStorage values
  beforeMount() {
    this.$store.commit('init')
  },
}
</script>

<style lang="scss" module>
@import './assets/design/reboot.scss';
@import './assets/design/index.scss';
/* stylelint-disable */
body {
  background-color: $primary-color;
  #app {
    font-family: $system-default-font-family;
    color: $color-text;
  }
}
</style>
