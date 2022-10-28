/**
 * TODO: Map from google doc: https://docs.google.com/document/d/1KoItFsTYVIBInIG2YmA7wSxkKS4vti_X0A0td_yaHVM/edit#
 * Hardcoded map of breach resolution data types
 */
const breachResolutionDataTypes = {
  password: {
    priority: 1,
    header: '',
    body: ''
  }
}

/**
 * Get a subset of the breach resolution data types map
 * based on the array of datatypes leaked during a breach
 * @param {Array} dataTypes datatypes leaked during the breach
 * @returns {Map} map of relevant breach resolution recommendations
 */
function getBreachResolutionRecs (dataTypes) {
  // TODO: filter based on dataTypes array
  return breachResolutionDataTypes
}

export { getBreachResolutionRecs }
