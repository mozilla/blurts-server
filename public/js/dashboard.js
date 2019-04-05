"use strict";


const toggleEl = (e) => {
  const toggleParent = e.target;
  ["inactive", "active"].forEach(className => {
    toggleParent.classList.toggle(className);
  });
};

const findAncestor = (el, cls) => {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};

const resendEmail = async(e) => {
  const resendLink = e.target;
  const parentDiv = findAncestor(resendLink, "e-toggle-info-wrapper");
  const emailToSend = parentDiv.querySelector("span.unverified-e-address").innerText;

  JSON.stringify(emailToSend);

  await fetch("/user/resend-email", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify({ "email": emailToSend }),
  });
};

if (document.querySelector(".toggle-parent")) {
  const toggles = document.querySelectorAll(".toggle-parent");
  toggles.forEach(el => {
    el.addEventListener("click", toggleEl);
  });

  if (document.querySelector(".resend-email")) {
    const resendLinks = document.querySelectorAll(".resend-email");
    resendLinks.forEach(link => {
      link.addEventListener("click", resendEmail);
    });
  }
}
