const button = document.querySelector("button");
const modalArea = document.querySelector(".modal");
const box = document.querySelector('.modal_box')
const body = document.querySelector("body");
modalArea.classList.add('modal_change')

const closeModal = () => {
        modalArea.style.visibility = "hidden";
        modalArea.style.opacity = 0;
        body.classList.remove("modal_open");   
}
    
const openModal = () => {
    body.classList.add("modal_open");
    modalArea.style.visibility = 'visible';
    modalArea.style.opacity = 1;
    }

button.addEventListener("click", openModal);
modalArea.addEventListener('click', (event) => { if (event.target === modalArea && event.target != box) closeModal()});
window.addEventListener("keydown", (event) => { if (event.code === 'Escape') closeModal() });






