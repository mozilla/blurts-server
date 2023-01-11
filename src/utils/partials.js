function hasPartials (data) {
  return data.partials?.length > 0
}

function createPartial (partialName, data) {
  const error = new Error(`Couldn’t find partial: '${partialName}'`)
  if (!hasPartials(data)) {
    throw error
  }

  const partial = data.partials.find(partial => partial.name === partialName)
  if (!partial) {
    throw error
  }

  return partial(data)
}

export { hasPartials, createPartial }
