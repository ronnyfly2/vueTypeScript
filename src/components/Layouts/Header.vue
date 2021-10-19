<template lang="pug">
header(height="60px")
  .row(:gutter="24")
    .col.left(:sm="12")
      router-link(to="/")
        span logo 
      router-link(to="/about")  About
    .col.right(:sm="12")
      .user_header
        .select_user
          span {{ userData.firstname }}
          i(class="fas fa-skating fa-fw" style="background:DodgerBlue")
          i(class="bi-github" role="img" aria-label="GitHub")
          i(class="fas fa-camera")
          i.fas.fa-sign-out-alt(@click="logout")
          
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: 'Header',
  data() {
    return {
      open: false,
      profileMenu: false,
      profile: this.userData,
    };
  },
  computed: {
    ...mapGetters({
      userData: "auth/userData"
    }),
  },
  created() {
    console.log(this)
  },
  methods: {
    ...mapActions({
      logoutUser: "auth/logout",
    }),
    logout() {
      return this.logoutUser().then(() => this.$router.go(0));
    },
  },
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
