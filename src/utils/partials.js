import { PartialNotFoundError } from './error.js'

function hasPartials (data) {
  return data.partials?.length > 0
}

function createPartial (partialName, data) {
  if (!hasPartials(data)) {
    throw new PartialNotFoundError(partialName)
  }

  const partial = data.partials.find(partial => partial.name === partialName)
  if (!partial) {
    throw new PartialNotFoundError(partialName)
  }

  return partial(data)
}

export { hasPartials, createPartial }
