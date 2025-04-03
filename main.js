

const blob = document.getElementById("blob");
const eril = document.getElementById("eril");

window.onpointermove = event => { 
  const { pageX, pageY } = event; // Tracks position beyond viewport height

  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 1000, fill: "forwards" });

};