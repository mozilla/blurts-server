"use strict";

/* global sendPing */

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
      case "remove-pilot-mgmt":
        initRemovePilotMgmt();
        break;
      default:
        console.log("no page specific js required");
    }
  }
}

function initRemoveFAQ() {
  addRemoveFAQLinks();
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

function initRemovePilotMgmt() {
  document
    .getElementById("remove-mgmt-getkid-submit")
    .addEventListener("click", handleMgmtGetKidClick);

  document
    .getElementById("remove-mgmt-cancel-submit")
    .addEventListener("click", handleMgmtCancelClick);

  document
    .getElementById("remove-mgmt-optin-submit")
    .addEventListener("click", handleOptinClick);

  document
    .getElementById("remove-mgmt-getcounts-submit")
    .addEventListener("click", handleGetCountsClick);

  document
    .getElementById("remove-mgmt-enroll-count-submit")
    .addEventListener("click", handleEnrollmentCountSubmit);
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

function addRemoveFAQLinks() {
  const FAQ_LINKS = {
    "remove-link-partner": "https://www.thekanary.com/",
    "remove-link-support-email": "mailto:monitor-pilot@mozilla.com",
    "remove-link-bug-form":
      "https://docs.google.com/forms/d/e/1FAIpQLSe4qAy3vB6iZvq9DsKGgh65zN4X3xq-T3K2XjF0zNScDSMcgQ/viewform",
  };

  const $faqLinks = document.querySelectorAll("[data-l10n-name]");
  $faqLinks.forEach((link) => {
    const linkID = link.dataset.l10nName;
    const linkURL = FAQ_LINKS[linkID];
    if (linkURL) {
      link.href = linkURL;
    } else {
      console.log("no link match", link, linkID);
    }
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
  const $removeSubmit = document.querySelector(".js-remove-submit");

  if ($removeSubmit) {
    $removeSubmit.addEventListener("click", onRemoveFormSubmitClick);
  }

  const $confirmEdit = document.querySelector(".js-confirm-edit-btn");

  if ($confirmEdit) {
    $confirmEdit.addEventListener("click", onConfirmEditClick);
  }

  const $removeConfirm = document.querySelector(".js-remove-confirm");
  if ($removeConfirm) {
    $removeConfirm.addEventListener("click", onRemoveConfirmSubmitClick);
  }

  document.querySelectorAll(".js-form-select").forEach((selector) => {
    selector.addEventListener("change", onSelectChange);
  });
  document.querySelectorAll(".js-form-select").forEach((selector) => {
    selector.addEventListener("change", onSelectChange);
  });

  //user should only see the opt out button the first time they sign up, not when editing info, hence the check
  const $optOutBtn = document.querySelector(".js-remove-optout");
  if ($optOutBtn) {
    $optOutBtn.addEventListener("click", onRemoveFormOptoutClick);
  }
}

function onSelectChange(e) {
  e.target.classList.toggle("active", true);
  if (e.target.name === "country") {
    document
      .querySelector(".remove-dashboard-container")
      .setAttribute("data-country", e.target.value);

    if (e.target.value === "US") {
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
  e.preventDefault();
  const $form = e.target.form;

  const isValid = $form.reportValidity();
  if (!isValid) {
    console.log("not valid!");
    return;
  }

  const formData = new FormData($form);

  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.nextPage) {
        window.location.pathname = data.nextPage;
      } else if (data.error) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.error;
      } else {
        console.error("there was an error in the response", data);
      }
    })
    .catch((error) => {
      console.error("error with form submission", error);
    });
}

function clearFieldValidity() {
  const $formFields = document.querySelectorAll("input, select");
  $formFields.forEach(($fieldEl) => {
    $fieldEl.setCustomValidity("");
  });
}

function displayCustomPatternValidity($fieldEl, patternError, unknownError) {
  if (!$fieldEl.checkValidity()) {
    if ($fieldEl.validity.patternMismatch) {
      $fieldEl.setCustomValidity(patternError);
    } else {
      $fieldEl.setCustomValidity(unknownError);
    }
  }
}

function checkEmptyErrors($form) {
  const emptyFields = [];
  Array.from($form.elements).forEach(($fieldEl) => {
    const isRequired =
      $fieldEl.getAttribute("required") === null ? false : true;

    if (isRequired) {
      const fieldLength = $fieldEl.value.trim().length;
      if (!fieldLength) {
        emptyFields.push($fieldEl);
      }
    }
  });
  return emptyFields;
}

function checkNameErrors(nameError, unknownError) {
  const $firstName = document.getElementById(
    "remove-dashboard-form-first-name"
  );
  const $middleName = document.getElementById(
    "remove-dashboard-form-middle-name"
  );
  const $lastName = document.getElementById("remove-dashboard-form-last-name");
  const $nameErrorField = document.querySelector(
    ".remove-dashboard-form-error.--name"
  );

  displayCustomPatternValidity($firstName, nameError, unknownError);
  displayCustomPatternValidity($middleName, nameError, unknownError);
  displayCustomPatternValidity($lastName, nameError, unknownError);

  const firstValid = $firstName.checkValidity();
  const middleValid = $middleName.checkValidity();
  const lastValid = $lastName.checkValidity();

  if (!firstValid || !middleValid || !lastValid) {
    displayRemoveFormError($nameErrorField, nameError);
  } else {
    displayRemoveFormError($nameErrorField, "");
  }
}

function checkLocErrors(nameError, unknownError) {
  const $cityField = document.getElementById("remove-dashboard-form-loc-city");
  const cityValid = $cityField.checkValidity();
  const $cityErrorField = document.querySelector(
    ".remove-dashboard-form-error.--loc"
  );
  displayCustomPatternValidity($cityField, nameError, unknownError);

  if (!cityValid) {
    displayRemoveFormError($cityErrorField, nameError);
  } else {
    displayRemoveFormError($cityErrorField, "");
  }
}

function displayRemoveFormError($el, error) {
  $el.innerText = error;
}

function displayEmptyFieldErrors(emptyFields) {
  emptyFields.forEach(($fieldEl) => {
    const $fieldGroup = $fieldEl.closest(".input-group");
    const $fieldError = $fieldGroup.querySelector(
      ".remove-dashboard-form-error"
    );
    if ($fieldError) {
      $fieldError.innerText = "Fields cannot be blank or contain only spaces";
      $fieldEl.setCustomValidity(
        "Fields cannot be blank or contain only spaces"
      );
      $fieldEl.reportValidity();
    }
  });
}

function clearFieldErrors() {
  document
    .querySelectorAll(".remove-dashboard-form-error")
    .forEach(($formError) => {
      $formError.innerText = "";
    });
}

function onRemoveFormSubmitClick(e) {
  e.preventDefault();

  clearFieldErrors();

  const $form = e.target.form;
  const doValidate = $form.dataset.validate;
  const formData = new FormData($form);
  if (doValidate) {
    clearFieldValidity();

    const emptyFields = checkEmptyErrors($form);
    if (emptyFields.length) {
      displayEmptyFieldErrors(emptyFields);
      return;
    }

    const nameError =
      "This field must use only letters, spaces, apostrophes, or dashes, and must be at least 2 characters long";
    const unknownError = "There was an unknown error with this field";

    checkNameErrors(nameError, unknownError);
    checkLocErrors(nameError, unknownError);

    const isValid = $form.reportValidity(); //use native html form validator
    if (!isValid) {
      return;
    }
  }

  populateConfirmData(formData);
  toggleConfirmScreen(true);
}

function onRemoveFormOptoutClick(e) {
  e.preventDefault();
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
  const doValidate = $form.dataset.validate;
  if (doValidate) {
    const isValid = $form.reportValidity(); //use native html form validator
    if (!isValid) {
      return;
    }
  }
  const formData = new FormData($form);

  e.preventDefault(); //if valid, prevent submission and post data

  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if (data.nextPage) {
        window.location.pathname = data.nextPage;
      } else {
        console.error("there was an error in the response", data);
        if (data.error) {
          document.querySelector(
            ".remove-dashboard-form-error.--general"
          ).innerText = data.error;
        }
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
  document
    .querySelectorAll(".remove-dash-results-detail-link")
    .forEach(addLeavingLink);
}

function addRemoveDashDetailsToggle(el) {
  el.addEventListener("click", onRemoveDashDetailsToggle);
}

function addStatusFilterListener(el) {
  el.addEventListener("click", onStatusFilterToggle);
}

function addLeavingLink(el) {
  el.addEventListener("click", onLeavingLinkClick);
}

function onRemoveDashDetailsToggle(e) {
  e.preventDefault();
  const $thisToggle = e.currentTarget;
  const $item = $thisToggle.closest(".remove-dash-results-list-item");
  if ($item) {
    const thisID = `${$item.dataset.broker}-${$item.dataset.step}`;
    $item.classList.toggle("is-active");
    sendPing($item, "Click", thisID);
  }
}

function onRemoveDashFAQToggle(e) {
  e.preventDefault();
  const $item = e.currentTarget.closest(".remove-faq__list-item");
  if ($item) {
    $item.classList.toggle("is-active");
  }
}

function onStatusFilterToggle(e) {
  e.preventDefault();
  e.stopPropagation();
  const $item = e.currentTarget.closest(".remove-filter-key-list-item");
  const $container = document.querySelector(".remove-dashboard-container");
  if ($item && $container) {
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
}

function onLeavingLinkClick(e) {
  const $trigger = e.currentTarget;
  const thisLink = $trigger.dataset.link;
  const thisLabel = $trigger.dataset.eventLabel;
  const modalID = $trigger.dataset.micromodalTrigger;
  const $thisModal = document.getElementById(modalID);
  const $modalLink = $thisModal.querySelector(".modal__leaving_link");

  if (thisLink && $modalLink) {
    $modalLink.href = thisLink;
    $modalLink.dataset.eventLabel = thisLabel;
  } else {
    console.error(
      "either the leaving monitor modal or the link data attribute for the modal trigger is missing"
    );
    if ($modalLink) {
      $modalLink.href = "#"; //clear out any previous links
    }
  }
}

function handleMgmtGetKidClick(e) {
  e.preventDefault();
  const $form = e.target.form;
  const formData = new FormData($form);
  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.kid) {
        document.getElementById("remove-mgmt-cancel-kid").value = data.kid;
      } else if (data.error) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.error;
      }
    })
    .catch((error) => {
      console.error("error with form submission", error);
    });
}

function handleOptinClick(e) {
  e.preventDefault();
  const $form = e.target.form;
  const formData = new FormData($form);
  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.msg) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.msg;
      } else if (data.error) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.error;
      }
    })
    .catch((error) => {
      console.error("error with form submission", error);
    });
}

function handleMgmtCancelClick(e) {
  e.preventDefault();
  const $form = e.target.form;
  const formData = new FormData($form);
  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.msg) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.msg;
      } else if (data.error) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.error;
      }
    })
    .catch((error) => {
      console.error("error with form submission", error);
    });
}

function handleGetCountsClick(e) {
  e.preventDefault();
  const $form = e.target.form;
  const formData = new FormData($form);
  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.msg) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.msg;
      } else if (data.error) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.error;
      }
    })
    .catch((error) => {
      console.error("error getting ID count from database", error);
    });
}

function handleEnrollmentCountSubmit(e) {
  e.preventDefault();
  const $form = e.target.form;
  const formData = new FormData($form);
  fetch($form.action, {
    method: "POST",
    headers: {
      "CSRF-Token": formData.get("_csrf"), // <-- is the csrf token as a header
    },
    body: new URLSearchParams(formData),
  })
    .then((resp) => {
      return resp.json(); // or resp.text() or whatever the server sends
    })
    .then((data) => {
      if (data.msg) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.msg;
      } else if (data.error) {
        document.querySelector(
          ".remove-dashboard-form-error.--general"
        ).innerText = data.error;
      }
    })
    .catch((error) => {
      console.error("error getting ID count from database", error);
    });
}

window.onload = function () {
  initRemove();
};
