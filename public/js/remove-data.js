"use strict";

//MH TODO: Find out how to scope this to just remove page

function initRemove() {
  const $removePage = document.querySelector(".remove-page");
  if ($removePage) {
    switch ($removePage.id) {
      //MH - TODO: remove need for conditional and do this before we route. Talk to P&S about how best to handle this.
      case "remove-form":
        //const removeFormSubmitted = localStorage.getItem("remove-form-submitted") === "true";
        const kanaryID = parseInt(localStorage.getItem("kanary-id"));
        if (kanaryID) {
          window.location = "/user/remove-dashboard"; //MH TODO: - this check should be happening at the router level before hitting this page so redirect is not needed
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
  //populateCountries();
  addRemoveFormListeners();
}

function populateCountries() {}

function initRemoveDashboard() {
  //localStorage.setItem("remove-form-submitted", false); //MH - TODO: temp - clear localStorage so form is shown next time we hit the remove tab default route.
  localStorage.setItem("kanary-id", false); //MH - TODO: temp - clear localStorage so form is shown next time we hit the remove tab default route.
  addRemoveDashListeners();
}

function addRemoveFormListeners() {
  document
    .querySelector(".js-remove-submit")
    .addEventListener("click", onSubmitClick);
}

function onSubmitClick(e) {
  handleFormSubmit(e);
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
        // localStorage.setItem("remove-form-submitted", true);
        localStorage.setItem("kanary-id", body.id); //MH - temp, set local storage to handle showing remove dashboard after form submission.
        window.location = "/user/remove-signup-confirmation";
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
