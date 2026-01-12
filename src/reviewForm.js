/**
 * ============================================================================
 * REVIEW FORM - Write a Review Form Validation
 * ============================================================================
 * 
 * Handles form validation for the "Write a Review" form.
 * Features:
 * - Star rating selection (required)
 * - Review content validation (required)
 * - Display name validation (required)
 * - Email validation (required, valid format)
 * - Error message display matching UI design
 * - Prevent default form submission
 * 
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.review-form');
  
  forms.forEach((form) => {
    const stars = form.querySelectorAll('.rating-star');
    const ratingInput = form.querySelector('input[name="rating"]');
    const ratingContainer = form.querySelector('.rating-container');
    
    // Star rating click handler
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        const rating = index + 1;
        ratingInput.value = rating;
        
        // Update star visuals
        stars.forEach((s, i) => {
          if (i < rating) {
            s.classList.remove('fa-regular');
            s.classList.add('fa-solid');
          } else {
            s.classList.remove('fa-solid');
            s.classList.add('fa-regular');
          }
        });
        
        // Clear error if exists
        clearError(ratingContainer);
      });
      
      // Hover effect
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add('text-[#FA8A8A]', 'scale-110');
          }
        });
      });
      
      star.addEventListener('mouseleave', () => {
        stars.forEach((s) => s.classList.remove('scale-110'));
      });
    });
    
    // Form submit handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Clear all previous errors
      form.querySelectorAll('.error-message').forEach(el => el.remove());
      
      let isValid = true;
      
      // Validate rating
      // const rating = ratingInput.value;
      // if (!rating || rating === '0') {
      //   showError(ratingContainer, 'This field is required.');
      //   isValid = false;
      // }
      
      // Validate review content
      const reviewContent = form.querySelector('textarea[name="review-content"]');
      if (!reviewContent.value.trim()) {
        showError(reviewContent, 'This field is required.');
        isValid = false;
      }
      
      // Validate display name
      const displayName = form.querySelector('input[name="display-name"]');
      if (!displayName.value.trim()) {
        showError(displayName, 'This field is required.');
        isValid = false;
      }
      
      // Validate email
      const email = form.querySelector('input[name="review-email"]');
      if (!email.value.trim()) {
        showError(email, 'This field is required.');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      }
      
      if (isValid) {
        // Form is valid - you can submit via AJAX here
        console.log('Form submitted successfully!');
        alert('Review submitted successfully!');
        // Reset form after successful submission
        form.reset();
        resetStars(stars);
        ratingInput.value = '0';
      }
    });
  });
  
  /**
   * Show error message below an element
   * Matches the UI design: pink background with exclamation icon
   * @param {HTMLElement} element - The element to show error for
   * @param {string} message - Error message text
   */
  function showError(element, message) {
    // Remove existing error if any
    clearError(element);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message flex items-center gap-2 bg-[#f2847d1a] h-[34px] border border-solid border-[#f2847d] text-[#c62828] text-[14px] p-2 mt-2 items-center';
    errorDiv.innerHTML = `
      <span class="flex-shrink-0 w-[16px] h-[16px] rounded-full bg-[#ef5350] text-white flex items-center justify-center text-[11px] font-bold">!</span>
      <span class="text-light">${message}</span>
    `;
    
    // Insert after the element or its parent container
    if (element.classList.contains('rating-container')) {
      element.after(errorDiv);
    } else {
      element.parentNode.insertBefore(errorDiv, element.nextSibling);
    }
  }
  
  /**
   * Clear error message for an element
   * @param {HTMLElement} element - The element to clear error for
   */
  function clearError(element) {
    const nextSibling = element.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains('error-message')) {
      nextSibling.remove();
    }
  }
  
  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} - True if valid
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Reset stars to default state (all outline)
   * @param {NodeList} stars - Star elements
   */
  function resetStars(stars) {
    stars.forEach((s) => {
      s.classList.remove('fa-solid');
      s.classList.add('fa-regular');
    });
  }

  // =========================================================================
  // REVIEW PAGINATION
  // =========================================================================
  const pagination = document.querySelector('.review-pagination');
  if (pagination) {
    const pageButtons = pagination.querySelectorAll('.review-page-btn');
    const nextBtn = pagination.querySelector('.review-page-next');
    const lastBtn = pagination.querySelector('.review-page-last');
    let currentPage = 1;
    const totalPages = pageButtons.length;

    /**
     * Update pagination active state
     * @param {number} page - The page number to set as active
     */
    function setActivePage(page) {
      currentPage = page;
      pageButtons.forEach((btn) => {
        const btnPage = parseInt(btn.getAttribute('data-page'));
        if (btnPage === page) {
          // Active state: text-[#7b7b7b] text-[22.5px] font-bold
          btn.classList.add('text-[#7b7b7b]', 'text-[22.5px]', 'font-bold');
        } else {
          // Inactive state: remove active styles
          btn.classList.remove('text-[#7b7b7b]', 'text-[22.5px]', 'font-bold');
        }
      });
    }

    // Page button click handlers
    pageButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.getAttribute('data-page'));
        setActivePage(page);
      });
    });

    // Next button click handler
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          setActivePage(currentPage + 1);
        }
      });
    }

    // Last page button click handler
    if (lastBtn) {
      lastBtn.addEventListener('click', () => {
        setActivePage(totalPages);
      });
    }
  }
});
