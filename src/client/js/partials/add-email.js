let dialogEl, form

function init () {
  dialogEl = document.querySelector('dialog[data-partial="add-email"]')
  if (!dialogEl) return

  form = dialogEl.querySelector('form')
  form.addEventListener('submit', handleSubmit)
  dialogEl.addEventListener('close', kill)
}

async function handleSubmit (e) {
  e.preventDefault()

  try {
    form.elements['email-submit'].toggleAttribute('disabled', true)
    const res = await fetch('/api/v1/user/email', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': form.elements['csrf-token'].value
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify({
        email: form.elements['email-address'].value
      })
    })

    if (!res.ok) throw new Error('Bad fetch response')

    renderSuccess(form.elements['email-address'].value)
  } catch (e) {
    console.error('Could not add new email.', e)
  } finally {
    form.elements['email-submit'].toggleAttribute('disabled', false)
  }
}

function renderSuccess (email) {
  const content = dialogEl.querySelector('template[data-success]').content.cloneNode(true)
  const messageEl = content.querySelector('p.add-email-success')

  messageEl.style.setProperty('--form-height', `${form.clientHeight}px`)
  messageEl.querySelector('.current-email').textContent = email
  form.replaceWith(content)
}

function kill () {
  form.removeEventListener('submit', handleSubmit)
  dialogEl.removeEventListener('close', kill)
}

export default init
