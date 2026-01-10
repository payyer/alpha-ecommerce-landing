document.addEventListener("DOMContentLoaded", () => {
  // Nutritional Information Modal
  const modal = document.getElementById("js-modal");
  const modalBtn = document.getElementById("js-modal-btn");
  const closeBtn = document.getElementById("js-close-btn");
  const modalContent = modal?.querySelector(".relative");

  const openModal = () => {
    modal.classList.remove("invisible", "opacity-0");
    modal.classList.add("flex", "opacity-100", "animate-fade-in");
    modalContent?.classList.remove("scale-95");
    modalContent?.classList.add("scale-100", "animate-scale-in");
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    modalContent?.classList.remove("scale-100");
    modalContent?.classList.add("scale-95");

    const timer = setTimeout(() => {
      modal.classList.remove("flex", "animate-fade-in");
      modal.classList.add("invisible");
      modalContent?.classList.remove("animate-scale-in");
      document.body.classList.remove("overflow-hidden");
      clearTimeout(timer);
    }, 300);
  };

  if (modalBtn && modal && closeBtn) {
    modalBtn.onclick = openModal;
    closeBtn.onclick = closeModal;

    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };
  }

  // Clinicians Choice Modal
  const cliniciansModal = document.getElementById("clinicians-choice-modal");
  const cliniciansModalBtn = document.getElementById(
    "js-open-clinicians-choice-modal"
  );
  const cliniciansModalCloseBtn = document.getElementById(
    "js-close-clinicians-choice-modal"
  );
  const cliniciansModalContent = cliniciansModal?.querySelector(".relative");

  const openCliniciansModal = () => {
    cliniciansModal.classList.remove("invisible", "opacity-0");
    cliniciansModal.classList.add("flex", "opacity-100", "animate-fade-in");
    cliniciansModalContent?.classList.remove("scale-95");
    cliniciansModalContent?.classList.add("scale-100", "animate-scale-in");
    document.body.classList.add("overflow-hidden");
  };

  const closeCliniciansModal = () => {
    cliniciansModal.classList.remove("opacity-100");
    cliniciansModal.classList.add("opacity-0");
    cliniciansModalContent?.classList.remove("scale-100");
    cliniciansModalContent?.classList.add("scale-95");

    const timer = setTimeout(() => {
      cliniciansModal.classList.remove("flex", "animate-fade-in");
      cliniciansModal.classList.add("invisible");
      cliniciansModalContent?.classList.remove("animate-scale-in");
      document.body.classList.remove("overflow-hidden");
      clearTimeout(timer);
    }, 300);
  };

  if (cliniciansModalBtn && cliniciansModal && cliniciansModalCloseBtn) {
    cliniciansModalBtn.onclick = openCliniciansModal;
    cliniciansModalCloseBtn.onclick = closeCliniciansModal;

    cliniciansModal.onclick = (e) => {
      if (e.target === cliniciansModal) {
        closeCliniciansModal();
      }
    };
  }

  // Clinicians Choice Banner Close
  const cliniciansChoiceEl = document.getElementById("clinicians-choice");
  const cliniciansChoiceCloseEl = document.getElementById(
    "js-close-clinicians-choice"
  );

  if (cliniciansChoiceCloseEl && cliniciansChoiceEl) {
    cliniciansChoiceCloseEl.addEventListener("click", () => {
      cliniciansChoiceEl.style.display = "none";
    });
  }
});
