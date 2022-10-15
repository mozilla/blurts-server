/**
* Detect when document has been scrolled.
* Uses IntersectionObserver for better performance over 'scroll' event.
* Hit area located above viewport (-1% top) with height of 1% (innerHeight px units did not work in Chrome)
*/

const observer = new IntersectionObserver(handleScroll, { rootMargin: '1% 0px -101% 0px' }) // hit area 1% height at -1% top

function handleScroll (entries) {
  entries.forEach((entry) => {
    switch (entry.target) {
      case document.body:
        document.documentElement.classList.toggle('scrolled', entry.isIntersecting)
        break
    }
  })
}

observer.observe(document.body)
