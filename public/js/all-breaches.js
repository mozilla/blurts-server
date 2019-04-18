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
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy-img");


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

if (document.getElementById("all-breaches")) {

  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      const loader = document.getElementById("breaches-loader");
      loader.classList.add("hide");
    }
  };

  const images = new breachImages();
  const breaches = new filterBreaches();
  let filtered = false;

  images.lazyLoad();
  document.addEventListener("scroll", images.lazyLoad);
  window.addEventListener("resize", images.lazyLoad);
  window.addEventListener("orientationchange", images.lazyLoad);


  const breachFilters = document.querySelectorAll(".breach-filter");
  breachFilters.forEach(filter => {
    filter.addEventListener("click", (e) => {
      const filterBtn = e.target;
      const classToShow = filterBtn.dataset.breachCategory;

      if (classToShow === "show-all-breaches") {
        filtered = false;
        breaches.unhideAll();
        breachFilters.forEach(filter => {
          filter.classList.remove("hidden");
          filter.classList.remove("showing");
        });
        return images.lazyLoad;
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
        images.lazyLoad;
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
      return images.lazyLoad;
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
}
