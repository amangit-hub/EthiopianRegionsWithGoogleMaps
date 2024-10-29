function openMap(mapLink) {
  document.getElementById("mapIframe").src = mapLink;
  document.getElementById("myModal").style.display = "block";
}

function closeMap() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("mapIframe").src = ""; // Clear the iframe source
}

window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeMap();
  }
};
