<template lang="pug">
#app
  router-view
  main
    router-view.content(
      name="containerBlock",
    )
</template>
<script lang="ts">
export default {
  name: 'Layout',
  methods: {},
};
</script>
<style lang="scss">
main {
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
}
</style>
