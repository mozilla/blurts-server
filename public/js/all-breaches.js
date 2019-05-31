"use strict";

function replaceLogo(e) {
  e.target.src = "/img/logos/missing-logo-icon.png";
  e.target.removeEventListener("error", replaceLogo);
  return true;
}

function breachImages() {
  this.active = false;
  this.lazyLoad = () => {
    const lazyImages = [].slice.call(document.querySelectorAll(".lazy-img"));
    if (this.active === false) {
      this.active = true;
      const winHeight = window.innerHeight;
      lazyImages.forEach(lazyImage => {
        if ((lazyImage.getBoundingClientRect().top <= winHeight && lazyImage.getBoundingClientRect().bottom >= 0)) {
          lazyImage.classList.add("lazy-loaded");
          lazyImage.classList.remove("lazy-img");
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.addEventListener("error", replaceLogo);

          if (lazyImages.length === 0) {
            document.removeEventListener("scroll", this.lazyLoad);
            window.removeEventListener("resize", this.lazyLoad);
            window.removeEventListener("orientationchange", this.lazyLoad);
          }
        }
      }),
      this.active = false;
    }
  };
}

const makeBreachInfoSpans = (className, spanContent, wrapper) => {
  const span = document.createElement("span");
  span["classList"] = className;
  span.textContent = spanContent;
  wrapper.appendChild(span);
  return span;
};

function makeDiv(className, wrapper) {
  const div = document.createElement("div");
  div["classList"] = className;
  wrapper.appendChild(div);
  return div;
}

function clearBreaches(wrapper) {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
}

function makeBreaches(breachArray, breachCardWrapper) {
  breachCardWrapper.classList.toggle("hide-breaches");
  clearBreaches(breachCardWrapper);

  const fragment = document.createDocumentFragment();
  fragment["id"] = "all-breaches";

  for (const breach of breachArray) {
    const card = document.createElement("a");

    card["classList"] = `breach-card ${breach.Category} three-up ab drop-shadow`;
    card["href"] = `/breach-details/${breach.Name}`;
    card["data-breach-title"] = breach.Title;
    fragment.appendChild(card);

    const logoWrapper = makeDiv("breach-logo-wrapper", card);

    const breachLogo = document.createElement("img");
    breachLogo["alt"] = "";
    breachLogo["classList"] = "breach-logo lazy-img";
    breachLogo.dataset.src = `/img/logos/${breach.LogoPath}`;
    breachLogo.src = "/img/logos/lazyPlaceHolder.png";
    logoWrapper.appendChild(breachLogo);

    // make wrapper for the breach-info and link
    const breachInfoWrapper = makeDiv("breach-info-wrapper flx flx-col", card);

      // make wrapper for the Added Date, Compromised Accounts etc info...
    let wrapper = makeDiv("flx flx-col", breachInfoWrapper);
    makeBreachInfoSpans("breach-title", breach.Title, wrapper);

    // added date
    makeBreachInfoSpans("breach-key", breach.String.AddedDate, wrapper);
    makeBreachInfoSpans("breach-value", breach.AddedDate, wrapper);

    // compromised accounts
    makeBreachInfoSpans("breach-key", breach.String.CompromisedAccounts, wrapper);
    makeBreachInfoSpans("breach-value", breach.PwnCount, wrapper);

    // compromised data
    makeBreachInfoSpans("breach-key", breach.String.CompromisedData, wrapper);
    makeBreachInfoSpans("breach-value", breach.DataClasses, wrapper);

    // add link at bottom of card
    wrapper = makeDiv("breach-card-link-wrap", breachInfoWrapper);
    makeBreachInfoSpans("more-about-this-breach", breach.String.MoreInfoLink, wrapper);
  }

  breachCardWrapper.appendChild(fragment);
  breachCardWrapper.classList.toggle("hide-breaches");
  const breachLogos = new breachImages();
  breachLogos.lazyLoad();
  document.addEventListener("scroll", breachLogos.lazyLoad);
  window.addEventListener("resize", breachLogos.lazyLoad);
  window.addEventListener("orientationchange", breachLogos.lazyLoad);
  FOUCHotFix();
  return breachArray;
}

function FOUCHotFix() {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      const loader = document.getElementById("breaches-loader");
      loader.classList = ["hide"];
    }
  };
}

(async() => {

  if (document.getElementById("all-breaches")) {
    const breachCardWrapper = document.getElementById("all-breaches");
    const breachWrapper = document.getElementById("breach-array-json");

    const breachArray = JSON.parse(breachWrapper.dataset.breachArray);

    makeBreaches(breachArray, breachCardWrapper);
    const showAllBreaches = document.getElementById("show-all-breaches");
    const noResultsBlurb = document.getElementById("no-results-blurb");

    const fuzzyFindInput = document.getElementById("fuzzy-find-input");
    const fuzzyFinder = document.getElementById("fuzzy-form");

    showAllBreaches.addEventListener("click", (e) => {
      e.preventDefault();
      fuzzyFindInput.value = "";
      makeBreaches(breachArray, breachCardWrapper);
      showAllBreaches.classList = ["show-all-breaches"];
      noResultsBlurb.classList = "";
      return false;
    });


    const searchBreaches = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const breachSearchTerm = fuzzyFindInput.value.toLowerCase();

      // filter breach array by search term
      const filteredBreachArray = breachArray.filter(breach => {
        return breach.Title.toLowerCase().startsWith(breachSearchTerm);
      });

      // if hitting enter off a zero results search, restore breaches
      // and clear out input
      if (e.keyCode === 13) {
        if (noResultsBlurb.classList.contains("show")) {
          makeBreaches(breachArray, breachCardWrapper);
          noResultsBlurb.classList = "";
          showAllBreaches.classList = ["show-all-breaches"];
          fuzzyFindInput.value = "";
          return false;
        }
        makeBreaches(filteredBreachArray, breachCardWrapper);
        return false;
      }

      // if no results, show "no results message"
      if (filteredBreachArray.length === 0) {
        noResultsBlurb.classList.add("show");
      } else {
        noResultsBlurb.classList = "";
      }

      makeBreaches(filteredBreachArray, breachCardWrapper);
      return false;
    };

    fuzzyFinder.addEventListener("keydown", (e) => {
      if (fuzzyFindInput.value.length !== 0 ) {
        showAllBreaches.classList.add("show");
      }
      if (e.keyCode === 13) {
        showAllBreaches.classList = ["show-all-breaches"];
      }
    });
    fuzzyFinder.addEventListener("keyup", searchBreaches);
    fuzzyFinder.addEventListener("submit", searchBreaches);
  }
})();
