document.querySelectorAll('.toggle-scan-result-button').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.parentElement.classList.toggle('is-expanded')
  })
})
