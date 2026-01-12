/**
 * ============================================================================
 * MODAL COMPONENT
 * ============================================================================
 * 
 * Handles all modal/popup functionality on the page.
 * Features:
 * - Nutritional Information modal (supplement facts)
 * - Clinicians Choice modal (product endorsement details)
 * - Clinicians Choice banner close functionality
 * - Smooth fade-in/scale animations
 * - Click outside to close
 * - Body scroll lock when modal is open
 * 
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // NUTRITIONAL INFORMATION MODAL
  // =========================================================================
  const modal = document.getElementById("js-modal");
  const modalBtn = document.getElementById("js-modal-btn");
  const closeBtn = document.getElementById("js-close-btn");
  const modalContent = modal?.querySelector(".relative");

  /**
   * Open the nutritional information modal
   */
  const openModal = () => {
    modal.classList.remove("invisible", "opacity-0");
    modal.classList.add("flex", "opacity-100", "animate-fade-in");
    modalContent?.classList.remove("scale-95");
    modalContent?.classList.add("scale-100", "animate-scale-in");
    document.body.classList.add("overflow-hidden");
  };

  /**
   * Close the nutritional information modal with animation
   */
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

  // Bind event listeners for nutritional modal
  if (modalBtn && modal && closeBtn) {
    modalBtn.onclick = openModal;
    closeBtn.onclick = closeModal;

    // Close on backdrop click
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };
  }

  // =========================================================================
  // CLINICIANS CHOICE MODAL
  // =========================================================================
  const cliniciansModal = document.getElementById("clinicians-choice-modal");
  const cliniciansModalBtn = document.getElementById(
    "js-open-clinicians-choice-modal"
  );
  const cliniciansModalCloseBtn = document.getElementById(
    "js-close-clinicians-choice-modal"
  );
  const cliniciansModalContent = cliniciansModal?.querySelector(".relative");

  /**
   * Open the clinicians choice modal
   */
  const openCliniciansModal = () => {
    cliniciansModal.classList.remove("invisible", "opacity-0");
    cliniciansModal.classList.add("flex", "opacity-100", "animate-fade-in");
    cliniciansModalContent?.classList.remove("scale-95");
    cliniciansModalContent?.classList.add("scale-100", "animate-scale-in");
    document.body.classList.add("overflow-hidden");
  };

  /**
   * Close the clinicians choice modal with animation
   */
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

  // Bind event listeners for clinicians modal
  if (cliniciansModalBtn && cliniciansModal && cliniciansModalCloseBtn) {
    cliniciansModalBtn.onclick = openCliniciansModal;
    cliniciansModalCloseBtn.onclick = closeCliniciansModal;

    // Close on backdrop click
    cliniciansModal.onclick = (e) => {
      if (e.target === cliniciansModal) {
        closeCliniciansModal();
      }
    };
  }

  // =========================================================================
  // CLINICIANS CHOICE BANNER
  // =========================================================================
  const cliniciansChoiceEl = document.getElementById("clinicians-choice");
  const cliniciansChoiceCloseEl = document.getElementById(
    "js-close-clinicians-choice"
  );

  // Close banner on X click
  if (cliniciansChoiceCloseEl && cliniciansChoiceEl) {
    cliniciansChoiceCloseEl.addEventListener("click", () => {
      cliniciansChoiceEl.style.display = "none";
    });
  }
});
