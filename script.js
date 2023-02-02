const button = document.querySelector("button");
const modalArea = document.querySelector(".modal");
const box = document.querySelector('.modal_box')
const body = document.createElement("body");


modalArea.style.cssText = `
display: flex;
visibility: hidden;
opacity:0;
`;

const closeModal = event => {
    const target = event.target;
      if (target === modalArea && target != box) {
        modalArea.style.visibility = "hidden";
        modalArea.style.opacity = 0;
      }
    
  const func = () => {

      modalArea.style.visibility = "hidden";
      modalArea.style.opacity = 0;
 
};  
  
const openModal = () => {
    modalArea.style.visibility = 'visible';
    modalArea.style.opacity = 1;
    body.className = "modal-open";
}

button.addEventListener("click", openModal);
modalArea.addEventListener('click', closeModal);
window.addEventListener("keyup", func);



