"use strict";

//MH TODO: Find out how to scope this to just remove page

function initRemove() {
  const $removePage = document.querySelector(".remove-page");
  if ($removePage) {
    switch ($removePage.id) {
      case "remove-form":
        initRemoveForm();
        break;
      default:
        console.log("no matching page id");
    }
  }
}

function initRemoveForm() {
  addRemoveFormListeners();
}

function addRemoveFormListeners() {
  document
    .querySelector(".js-remove-submit")
    .addEventListener("click", onSubmitClick);
}

function onSubmitClick(evt) {
  evt.preventDefault();
  toggleFormSuccess(true);
}

function toggleFormSuccess(doShow) {
  const $dashboardContainer = document.querySelector(
    ".js-remove-dashboard-container"
  );
  $dashboardContainer.classList.toggle("is-hidden", doShow);

  const $formSuccessContainer = document.querySelector(
    ".js-remove-success-container"
  );
  $formSuccessContainer.classList.toggle("is-hidden", !doShow);
}

window.onload = function () {
  initRemove();
};
