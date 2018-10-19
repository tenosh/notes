<template>
  <div>
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
