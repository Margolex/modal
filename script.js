const button = document.querySelector("button");
const modalArea = document.querySelector(".modal");
const box = document.querySelector('.modal_box')
const body = document.querySelector("body");

modalArea.classList.add('modal_change')

const closeModal = event => {
    const target = event.target;
    if (target === box) {
       body.classList.add("modal_open") 
    }
  
    if (target === modalArea && target != box) {
        modalArea.style.visibility = "hidden";
        modalArea.style.opacity = 0;
        body.classList.remove("modal_open"); 
    }
       
}
 const closeEsc = () => {
    body.classList.remove("modal_open");
     modalArea.style.visibility = "hidden";
     modalArea.style.opacity = 0;
};
    
const openModal = () => {
    body.classList.add("modal_open");
    modalArea.style.visibility = 'visible';
    modalArea.style.opacity = 1;
    }

button.addEventListener("click", openModal);
modalArea.addEventListener('click', closeModal);
window.addEventListener("keyup", closeEsc);






