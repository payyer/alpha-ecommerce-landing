// Optional JS helper: add `active` class on the label of the selected radio
document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="purchase-opt"]');
  function syncActive() {
    radios.forEach((r) => {
      const label = document.querySelector(`label[for="${r.id}"]`);
      if (!label) return;
      if (r.checked) label.classList.add("active");
      else label.classList.remove("active");
    });
  }
  radios.forEach((r) => r.addEventListener("change", syncActive));
  // initial
  syncActive();
});
