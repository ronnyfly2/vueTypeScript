import * as bootstrap from "bootstrap";

export default class BootsTrapPlugin {
  tooltips(): void {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }

  toasts(): void {
    const toastElList = [].slice.call(document.querySelectorAll(".toast"));
    toastElList.map((toastEl) => new bootstrap.Toast(toastEl));
  }

  popover(): void {
    const popOverElList = [].slice.call(
      document.querySelectorAll(".popover_element")
    );
    popOverElList.map((toastEl) => new bootstrap.Popover(toastEl));
  }
}
