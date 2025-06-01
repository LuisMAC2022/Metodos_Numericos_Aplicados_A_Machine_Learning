// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Si se emplean botones con clase .collapsible (en lugar de <details>)
  var toggles = document.getElementsByClassName("collapsible");
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});
