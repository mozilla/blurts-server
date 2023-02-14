export const dialogLayout = data => `
${data.stylesheetPath ? `<link rel='stylesheet' href='${data.stylesheetPath}' type='text/css'>` : ''}
${data.partial(data)}
`
