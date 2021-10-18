<template lang="pug">
header(height="60px")
  .row(:gutter="24")
    .col.left(:sm="12")
      span logo
    .col.right(:sm="12")
      .user_header
        .select_user
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Header',
});
</script>
<style lang="scss">
.el-header {
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1001;
  box-shadow: 1px 1px 3px white;
  > div {
    padding: 15px 0 0 0;
  }
  .left {
    text-align: left;
    padding-top: 5px;
  }
  .right {
    text-align: right;
    padding-top: 5px;
  }
  .user_header {
    .select_user {
      cursor: pointer;
      width: auto;
      display: inline-block;
    }
    span {
      padding: 0 8px 0 6px;
    }
  }
  i {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
