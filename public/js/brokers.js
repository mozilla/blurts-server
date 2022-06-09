"use strict";

document.querySelectorAll(".toggle-scan-result-button").forEach(button => {
  button.addEventListener("click", (event) => {
    button.parentElement.parentElement.classList.toggle("is-expanded");
  });
});
