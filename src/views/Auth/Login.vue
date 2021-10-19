<template lang="pug">
.container_auth
  h2 Login
  form(
    class="login-form"
    :model="model"
    @submit.native.prevent="login"
  )
    input(
      v-model="model.email"
      placeholder="Correo electrónico"
      prefix-icon="el-icon-user"
    )
    input(
      v-model="model.password"
      placeholder="Contraseña"
      type="password"
    )
    button(
      class="primary"
      native-type="submit"
    ) Iniciar sesión
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {mapActions} from 'vuex'

export default defineComponent({
  name: "Login",
  data() {
    return {
      model: {
        email: "ronny@mail.com",
        password: "123456",
      },
      error: "",
      loading: false,
    };
  },
  mounted() {
    console.log('login', this)
  },
  methods: {
    ...mapActions({
      loginUser: "auth/login",
    }),
    login () {
      this.loginUser( { ...this.model })
        .then(() => {
          console.log('compa', this.$router);
          this.$router.push({ name: "Home" });
        })
        .catch(() =>
          console.log("Error", "Error al iniciar sesion", "error")
        );
    },
  },
});
</script>
<style lang="scss">
@import "@/styles/variables.scss";

.container_auth {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  form {
    padding: 0 15px;
  }
  h2 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
}
form {
  width: 300px;
}
button {
  height: 44px;
  width: 100%;
  border-radius: 8px;
  max-width: 300px;
  cursor: pointer;
  background: $color_normal-green;
  color: $color_white_1;
  border: 1px solid $color_normal-green;
}
input {
  background: $color_gray_1;
  border: 1px solid $color_gray_2;
  height: 42px;
  border-radius: 8px;
  width: 100%;
  padding: 0;
  padding-left: 10px;
  color: $color_white_1;
  outline: none;
  display: block;
}
</style>
