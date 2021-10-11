"use strict";

function initRemove() {
  const $removePage = document.querySelector(".remove-page");
  window.MicroModal.init();

  if ($removePage) {
    addRemoveGeneralListeners();
    switch ($removePage.id) {
      //MH - TODO: remove need for conditional and do this before we route. Talk to P&S about how best to handle this.
      case "remove-form":
        initRemoveForm();
        break;
      case "remove-dashboard":
        initRemoveDashboard();
        break;
      case "remove-enroll":
        initRemoveEnroll();
        break;
      case "remove-faq":
        initRemoveFAQ();
        break;
      default:
        console.log("no matching page id");
    }
  }
}

function initRemoveFAQ() {
  addRemoveFAQListeners();
}

function initRemoveEnroll() {
  addRemoveEnrollListeners();
}

function initRemoveForm() {
  addRemoveFormListeners();
}

function initRemoveDashboard() {
  addRemoveDashListeners();
}

function addRemoveGeneralListeners() {
  document
    .querySelectorAll(".info-trigger, .modal__close-footer")
    .forEach((infoTrigger) => {
      infoTrigger.addEventListener("click", (e) => {
        e.preventDefault(); //prevent page from scrolling to a non-existing anchor
      });
    });
}

function addRemoveFAQListeners() {
  document.querySelectorAll(".js-remove-faq-toggle").forEach((el) => {
    el.addEventListener("click", onRemoveDashFAQToggle);
  });
}

function addRemoveEnrollListeners() {
  const $enrollSubmit = document.querySelector(".js-enroll-submit");
  if ($enrollSubmit) {
    $enrollSubmit.addEventListener("click", onEnrollFormSubmitClick);
  }
}

function addRemoveFormListeners() {
  document
    .querySelector(".js-remove-submit")
    .addEventListener("click", onRemoveFormSubmitClick);

  document
    .querySelector(".js-confirm-edit-btn")
    .addEventListener("click", onConfirmEditClick);

  document
    .querySelector(".js-remove-confirm")
    .addEventListener("click", onRemoveConfirmSubmitClick);

  document.querySelectorAll(".js-form-select").forEach((selector) => {
    selector.addEventListener("change", onSelectChange);
  });
  document.querySelectorAll(".js-form-select").forEach((selector) => {
    selector.addEventListener("change", onSelectChange);
  });
}

function onSelectChange(e) {
  e.target.classList.toggle("active", true);
  if (e.target.name === "country") {
    document
      .querySelector(".remove-dashboard-container")
      .setAttribute("data-country", e.target.value);

    if (e.target.value === "US") {
      //MH TODO: should probably be in a constants file
      document
        .getElementById("remove-dashboard-form-loc-state")
        .setAttribute("required", true);
    } else {
      document
        .getElementById("remove-dashboard-form-loc-state")
        .removeAttribute("required");
    }
  }
}

function onConfirmEditClick(e) {
  e.preventDefault();
  toggleConfirmScreen(false);
}

function onEnrollFormSubmitClick(e) {
  const $form = e.target.form;
  const isValid = $form.reportValidity();
  if (!isValid) {
    console.log("not valid!");
    return;
  }
  e.preventDefault();
  fetch($form.action, {
    method: "POST",
    body: new URLSearchParams(new FormData($form)),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.nextPage) {
        window.location = data.nextPage;
      } else if (data.error) {
        alert(data.error);
      } else {
        console.error("there was an error in the response", data);
      }
    })
    .catch((error) => {
      console.error("error with form submission", error);
    });
}

function onRemoveFormSubmitClick(e) {
  const isValid = e.target.form.reportValidity();
  if (!isValid) {
    console.log("not valid!");
    return;
  }
  e.preventDefault();
  const formData = new FormData(e.target.form);

  populateConfirmData(formData);
  toggleConfirmScreen(true);
}

function toggleConfirmScreen(doShow) {
  document
    .querySelector(".js-remove-dashboard-container")
    .setAttribute("data-confirm", doShow);
}

function populateConfirmData(formData) {
  const fieldData = {};

  const fieldArr = [
    "account",
    "firstname",
    "middlename",
    "lastname",
    "city",
    "state",
    "country",
    "birthyear",
  ];

  const confirmArray = ["fullname", "account", "location", "birthyear"];

  fieldArr.forEach((field) => {
    fieldData[field] = formData.get(field) ? formData.get(field) : "";
  });

  fieldData["fullname"] = `${fieldData["firstname"]} ${
    fieldData["middlename"] ? fieldData["middlename"] : ""
  } ${fieldData["lastname"]}`;
  fieldData["location"] = `${fieldData["city"]}, ${
    fieldData["state"] ? fieldData["state"] : ""
  }, ${fieldData["country"]}`;

  confirmArray.forEach((confirmItem) => {
    const curField = confirmItem;
    const selectorString = `.remove-dashboard-confirm-item[data-id='${curField}'] .remove-dashboard-confirm-item-entry`;
    document.querySelector(selectorString).innerText = fieldData[curField];
  });
}

function onRemoveConfirmSubmitClick(e) {
  e.preventDefault();
  handleFormSubmit(e);
}

function handleFormSubmit(e) {
  const $form = document.getElementById("remove-data-signup-form");
  const isValid = $form.reportValidity(); //use native html form validator
  if (!isValid) {
    return;
  }

  e.preventDefault(); //if valid, prevent submission and post data

  fetch($form.action, {
    method: "POST",
    body: new URLSearchParams(new FormData($form)),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.nextPage) {
        window.location = data.nextPage;
      } else {
        console.error("there was an error in the response", data);
      }
    })
    .catch((error) => {
      console.error("error with form submission", error);
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

function onRemoveDashFAQToggle(e) {
  e.preventDefault();
  const $item = e.currentTarget.closest(".remove-faq__list-item");
  $item.classList.toggle("is-active");
}

function onStatusFilterToggle(e) {
  e.preventDefault();
  const $item = e.currentTarget.closest(".remove-filter-key-list-item");
  const $container = document.querySelector(".remove-dashboard-container");

  const filterType = $item.dataset.id;
  let curFilter = $container.getAttribute("data-filter");

  if (curFilter.includes(filterType)) {
    curFilter = curFilter.replace(filterType, "");
  } else {
    curFilter += ` ${filterType}`;
  }
  curFilter = curFilter.replace(/^\s+|\s+$/g, ""); //remove lead and end spaces
  $container.setAttribute("data-filter", curFilter);
}

window.onload = function () {
  initRemove();
};
