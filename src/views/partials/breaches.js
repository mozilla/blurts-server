export const breaches = data => `
<section>
  <h1>This is the breaches partial</h1>
  <button id="update-breaches">Update Breaches</button>
  <pre>${JSON.stringify(data.breachesData, null, 2)}</pre>
  <pre>${JSON.stringify(data.resolutionRecs, null, 2)}</pre>
</section>
`
