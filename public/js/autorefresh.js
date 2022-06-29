(() => {
  'use strict'

  const timeoutHash = document.location.hash
  const timeoutHashContent = Number.parseInt(timeoutHash.substring('#timeout='.length), 10)
  const timeout = (timeoutHash.substring(0, '#timeout='.length) === '#timeout=' && !Number.isNaN(timeoutHashContent))
    ? timeoutHashContent
    : 10000

  setTimeout(() => {
    const newTimeout = timeout * 2
    document.location.hash = `#timeout=${newTimeout}`
    document.location.reload()
  }, timeout)
})()
