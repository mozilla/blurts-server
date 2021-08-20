"use strict";

//MH TODO: Find out how to scope this to just remove page

function initRemove() {
  const $removePage = document.querySelector(".remove-page");
  if ($removePage) {
    switch ($removePage.id) {
      //MH - TODO: remove need for conditional and do this before we route. Talk to P&S about how best to handle this.
      case "remove-form":
        initRemoveForm();
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
  addRemoveDashListeners();
}

function addRemoveFormListeners() {
  document
    .querySelector(".js-remove-submit")
    .addEventListener("click", onSubmitClick);

  document
    .querySelector(".js-form-select")
    .addEventListener("change", onSelectChange);
}

function onSubmitClick(e) {
  handleFormSubmit(e);
}

function onSelectChange(e) {
  e.target.classList.toggle("active", true);
}

function handleFormSubmit(e) {
  e.preventDefault();
  //process form then...

  fetch(e.target.form.action, {
    method: "POST",
    body: new URLSearchParams(new FormData(e.target.form)),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((body) => {
      if (body.id) {
        window.location = "/user/remove-signup-confirmation"; //MH TODO: probably should be doing this through the router on backend?
      } else {
        console.error("no member id received", body);
      }
    })
    .catch((error) => {
      console.log(error);
      // TODO handle error
    });
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
