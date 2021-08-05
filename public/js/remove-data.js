"use strict";

//MH TODO: Find out how to scope this to just remove page

function initRemove() {
  const $removePage = document.querySelector(".remove-page");
  if ($removePage) {
    switch ($removePage.id) {
      //MH - TODO: remove need for conditional and do this before we route. Talk to P&S about how best to handle this.
      case "remove-form":
        const removeFormSubmitted =
          localStorage.getItem("remove-form-submitted") === "true";
        if (removeFormSubmitted) {
          window.location = "/user/remove-dashboard";
        } else {
          initRemoveForm();
        }
        break;
      case "remove-dashboard":
        initRemoveDashboard();
        break;
      default:
        console.log("no matching page id");
    }
  }
}

function initRemoveForm() {
  addRemoveFormListeners();
}

function initRemoveDashboard() {
  localStorage.setItem("remove-form-submitted", false); //MH - TODO: temp - clear localStorage so form is shown next time we hit the remove tab default route.
  addRemoveDashListeners();
}

function addRemoveFormListeners() {
  document
    .querySelector(".js-remove-submit")
    .addEventListener("click", onSubmitClick);
}

function onSubmitClick(evt) {
  evt.preventDefault();
  handleFormSubmit();
  toggleFormSuccess(true);
}

function handleFormSubmit() {
  //process form then...
  localStorage.setItem("remove-form-submitted", true); //MH - temp, set local storage to handle showing remove dashboard after form submission. Need to replace this with actual form processing
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

function addRemoveDashListeners() {
  document
    .querySelectorAll(".js-remove-dash-details-toggle")
    .forEach(addRemoveDashDetailsToggle);
  document
    .querySelectorAll(".remove-filter-key-button")
    .forEach(addStatusFilterListener);
}

function addRemoveDashDetailsToggle(el) {
  el.addEventListener("click", onRemoveDashDetailsToggle);
}

function addStatusFilterListener(el) {
  el.addEventListener("click", onStatusFilterToggle);
}

function onRemoveDashDetailsToggle(e) {
  e.preventDefault();
  const $item = e.currentTarget.closest(".remove-dash-results-list-item");
  $item.classList.toggle("is-active");
}

function onStatusFilterToggle(e) {
  e.preventDefault();
  const $item = e.currentTarget.closest(".remove-filter-key-list-item");
  const filterType = $item.dataset.id;
  document
    .querySelector(".remove-dashboard-container")
    .setAttribute("data-filter", filterType);
}

window.onload = function () {
  initRemove();
};
