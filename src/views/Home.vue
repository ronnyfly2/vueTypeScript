<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="row">
      <div class="col-6">hola</div>
      <div class="col-6">hola</div>
      <div class="col-12">
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
          <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </symbol>
          <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </symbol>
          <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </symbol>
        </svg>
        <div class="alert alert-primary d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
          <div>
            An example alert with an icon
          </div>
        </div>
        <div class="alert alert-dark" role="alert">
          A simple dark alert—check it out!
        </div>
        <div id="liveAlertPlaceholder"></div>
        <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
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
    verify.alert();
  },
  methods: {
    openAlert() {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')!
      const alertTrigger = document.getElementById('liveAlertBtn')

      function alert(message: string, type: string) {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        alertPlaceholder.append(wrapper)
      }

      if (alertTrigger) {
          alert('Nice, you triggered this alert message!', 'success')
      }
    }
  },
});
</script>
