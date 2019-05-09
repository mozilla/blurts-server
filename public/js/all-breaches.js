"use strict";

function breachImages() {
  this.active = false;
  this.lazyLoad = () => {
    let lazyImages = [].slice.call(document.querySelectorAll(".lazy-img"));
    if (this.active === false) {
      this.active = true;
      const winHeight = window.innerHeight;
      lazyImages.forEach(lazyImage => {
        if ((lazyImage.getBoundingClientRect().top <= winHeight && lazyImage.getBoundingClientRect().bottom >= 0)) {
          lazyImage.classList.add("lazy-loaded");
          lazyImage.classList.remove("lazy-img");
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;

          lazyImages = lazyImages.filter(image => {
            return image !== lazyImage;
          });
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

function filterBreaches() {
  this.unhideAll = () => {
    const hiddenImages = document.querySelectorAll(".breach-card.hide");
    hiddenImages.forEach(image => {
      image.classList.remove("hide");
    });
  },
  this.unhideOne = (classToShow) => {
    const hiddenImages = document.querySelectorAll(`.breach-card.hide.${classToShow}`);
    hiddenImages.forEach(image => {
      image.classList.remove("hide");
    });
  },
  this.hideAllExcept = (classToShow) => {
    const breachesToHide = document.querySelectorAll(`.breach-card:not(.${classToShow})`);
    breachesToHide.forEach(breach => {
      breach.classList.add("hide");
    });
  },
  this.hideCategory = (classToHide) => {
    const breachesToHide = document.querySelectorAll(`.breach-card.${classToHide}`);
    breachesToHide.forEach(breach => {
      breach.classList.add("hide");
    });
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
  clearBreaches(breachCardWrapper);

  const fragment = document.createDocumentFragment();
  fragment["id"] = "all-breaches";

  for (const breach of breachArray) {
    const card = document.createElement("a");
    // create wrapping breach card link element
    card["classList"] = `breach-card ${breach.Category} three-up ab`;
    card["href"] = `/breach-details/${breach.Name}`;
    card["data-breach-title"] = breach.Title;
    fragment.appendChild(card);

    let wrapper = makeDiv(`breach-card-title-wrapper flx ${breach.Category}`, card);
    makeBreachInfoSpans("breach-title", breach.Title, wrapper);
    const logoWrapper = makeDiv("breach-logo-wrapper", wrapper);

    const breachLogo = document.createElement("img");
    breachLogo["alt"] = "";
    breachLogo["classList"] = "breach-logo lazy-img";
    breachLogo.dataset.srcset = `/img/logos/${breach.LogoPath}`;
    breachLogo.src = "/img/logos/missing-logo-icon.png";
    logoWrapper.appendChild(breachLogo);

    // make wrapper for the breach-info and link
    const breachInfoWrapper = makeDiv("breach-info-wrapper flx flx-col", card);

    // make wrapper for the Added Date, Compromised Accounts etc info...
    wrapper = makeDiv("", breachInfoWrapper);

    // added date
    let wrappingSpan = makeBreachInfoSpans("breach-info demi key", breach.String.AddedDate, wrapper);
    makeBreachInfoSpans("breach-info-value", breach.AddedDate, wrappingSpan);

    // compromised accounts
    wrappingSpan = makeBreachInfoSpans("breach-info", breach.String.CompromisedAccounts, wrapper);
    makeBreachInfoSpans("breach-info-value", breach.PwnCount, wrappingSpan);

    // compromised data
    wrappingSpan = makeBreachInfoSpans("breach-info", breach.String.CompromisedData, wrapper);
    makeBreachInfoSpans("breach-info-value", breach.DataClasses, wrappingSpan);

    // add link at bottom of card
    wrapper = makeDiv("breach-card-link-wrap", breachInfoWrapper);
    makeBreachInfoSpans("more-about-this-breach", breach.String.MoreInfoLink, wrapper);
  }

  breachCardWrapper.appendChild(fragment);

  const breachLogos = new breachImages();
  breachLogos.lazyLoad();
  document.addEventListener("scroll", breachLogos.lazyLoad);
  window.addEventListener("resize", breachLogos.lazyLoad);
  window.addEventListener("orientationchange", breachLogos.lazyLoad);

  return breachArray;
}

(async() => {

  if (document.getElementById("all-breaches")) {
    const breachCardWrapper = document.getElementById("all-breaches");
    const breachWrapper = document.getElementById("breach-array-json");
    const breachArray = JSON.parse(breachWrapper.dataset.breachArray);

    makeBreaches(breachArray, breachCardWrapper);

    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        const loader = document.getElementById("breaches-loader");
        loader.classList.add("hide");
      }
    };

    const breaches = new filterBreaches();
    let filtered = false;

    const breachFilters = document.querySelectorAll(".breach-filter");
    breachFilters.forEach(filter => {
      filter.addEventListener("click", (e) => {
        const filterBtn = e.target;
        const classToShow = filterBtn.dataset.breachCategory;

        if (classToShow === "show-all-breaches") {
          if (filtered) {
            makeBreaches(breachArray, breachCardWrapper);
          }
          filtered = false;
          breaches.unhideAll();
          breachFilters.forEach(filter => {
            filter.classList.remove("hidden");
            filter.classList.remove("showing");
          });
          return;
        }

        if (!filtered) {
          filterBtn.classList.add("showing");
          breachFilters.forEach(filter => {
            if (!filter.classList.contains("showing")) {
              filter.classList.add("hidden");
            }
          });
          filtered = true;
          breaches.hideAllExcept(classToShow);
          return;
        }

        if (filterBtn.classList.contains("hidden")) {
          breaches.unhideOne(classToShow);
        }

        if (filterBtn.classList.contains("showing")) {
          breaches.hideCategory(classToShow);
        }
        ["showing", "hidden"].forEach(className => {
          filterBtn.classList.toggle(className);
        });
        return;
      });
    });

    const win = window;
    const fixedFilters = document.getElementById("fixed-filters");
    win.onscroll = function(e) {
      if (win.pageYOffset < 400) {
        if (fixedFilters.classList.contains("show-filters")) {
          fixedFilters.classList.remove("show-filters");
        }
        return;
      }
      if ((this.oldScroll > this.scrollY + 50) && win.pageYOffset > 1000) {
        if (!fixedFilters.classList.contains("show-filters") && !fixedFilters.classList.contains("to-top")) {
          fixedFilters.classList.add("show-filters");
        }
      }
      if (this.oldScroll < this.scrollY && fixedFilters.classList.contains("show-filters")) {
        fixedFilters.classList.remove("show-filters");
      }
      this.oldScroll = this.scrollY;
    };

    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    const fuzzyFindInput = document.getElementById("fuzzy-find-input");
    const fuzzyFinder = document.getElementById("fuzzy-form");

    fuzzyFinder.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const breachSearchTerm = fuzzyFindInput.value.toLowerCase();

      const filteredBreachArray = breachArray.filter(breach => {
        return breach.Title.toLowerCase().startsWith(breachSearchTerm);
      });
      fuzzyFindInput.value = "";
      makeBreaches(filteredBreachArray, breachCardWrapper);
      filtered = true;
    });
  }
})();
