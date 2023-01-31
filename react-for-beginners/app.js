const title = document.querySelector("body");

function handleBodySize() {
  const windowSize = window.innerWidth;

  if( windowSize => 1000) {
    title.style.backgroundColor = "red";
  } else if (windowSize >= 700) {
    title.style.backgroundColor = "blue";
  } else if (windowSize >= 500) {
    title.style.backgroundColor = "balck";
}}

    window.addEventListener("resize", handleBodySize);
