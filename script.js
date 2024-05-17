// Declare variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal");
const buttonOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < buttonOpenModal.length; i++) {
    console.log(buttonOpenModal[i].textContent);
}

// Open modal function
const openButton = () => {
    
     modal.classList.remove('hidden')
     overlay.classList.remove('hidden')
}

// Close modal function
const closeButton = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


// Event listeners
buttonOpenModal.forEach((btn) => btn.addEventListener('click', openButton));
buttonCloseModal.addEventListener('click', closeButton);
overlay.addEventListener('click', closeButton);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeButton();
    }
})
