

const blob = document.getElementById("blob");
const eril = document.getElementById("eril");


vis_prompts = false

window.onpointermove = event => { 
  const { pageX, pageY } = event; // Tracks position beyond viewport height

  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 1000, fill: "forwards" });

};



document.addEventListener("DOMContentLoaded", function() {
  const main_image = document.getElementById("main-img");
  const button_container = document.getElementById("button-container")

  for (let button of button_container.children) {
    button.style.display = 'none';
  }

  button_container.style.display = 'none';

  if (main_image) {
    main_image.addEventListener("click", function() {
      
      for (let button of button_container.children) {
        button.style.display = (button.style.display === 'none') ? 'inline-flex' : 'none';
      }

      button_container.style.display = (button_container.style.display === 'none') ? 'flex' : 'none';

      });
  }
});
