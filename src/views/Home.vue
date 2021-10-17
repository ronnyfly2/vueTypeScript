<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="row">
      <div class="col-6">hola</div>
      <div class="col-6">hola</div>
      <div class="col-12">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Tooltip on top"
        >
          Tooltip on top
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Tooltip on right"
        >
          Tooltip on right
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Tooltip on bottom"
        >
          Tooltip on bottom
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Tooltip on left"
        >
          Tooltip on left
        </button>
      </div>
      <div class="col-12">
        <button
          type="button"
          class="btn btn-lg btn-danger popover_element"
          id="jajaj"
          data-bs-toggle="popover"
          title="Popover title"
          data-bs-content="And here's some amazing content. It's very engaging. Right?"
        >
          Click to toggle popover
        </button>

        <span
          class="d-inline-block popover_element"
          id="housss"
          tabindex="0"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Disabled popover"
        >
          <button class="btn btn-primary" type="button" disabled>
            Disabled button
          </button>
        </span>

        <div
          aria-live="polite"
          aria-atomic="true"
          class="bg-dark position-relative bd-example-toasts"
        >
          <div
            class="toast-container position-absolute p-3 top-0 start-0"
            id="toastPlacement"
          >
            <div class="toast show">
              <div class="toast-header">
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import BootsTrapPlugin from "../plugins/bootstrap";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    let verify = new BootsTrapPlugin();
    verify.tooltips();
    verify.popover();
    verify.toasts();
  },
});
</script>
