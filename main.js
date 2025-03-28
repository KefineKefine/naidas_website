const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { pageX, pageY } = event; // Tracks position beyond viewport height

  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 9000, fill: "forwards" });
};