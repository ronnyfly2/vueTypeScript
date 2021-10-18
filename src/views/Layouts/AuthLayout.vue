<template lang="pug">
#app.auth
  router-view.content(
    name="containerBlock"
  )
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLogin',
})
</script>


<style lang="scss" scoped>
@import "@/styles/variables.scss";
.auth {
  height: 100vh;
}
.content {
  margin-left: 0;
}
</style>
