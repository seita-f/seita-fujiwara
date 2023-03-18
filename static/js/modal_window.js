console.log("modal_window.js ;)")

const modalTriggers = document.querySelectorAll('.modal-trigger');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

let activeModal = null; // flag to check if modal window is open of not

// when we click pic with modal-trigger class
modalTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {

    // Abort if another modal window is open
    if (activeModal) {
      return;
    }

    modals[index].classList.add('show');
    document.body.style.overflow = 'hidden';
    activeModal = modals[index];

  });
});

// when we click close button
closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].classList.remove('show');
    document.body.style.overflow = 'auto';
    activeModal = null;
  });
});
