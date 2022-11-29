import AppConstants from '../app-constants.js'

const { NODE_ENV } = AppConstants

const allow = `
User-agent: *
Allow: /
`

const disallow = `
User-agent: *
Disallow: /
`

const rules = ['dev', 'heroku', 'stage'].includes(NODE_ENV) ? disallow : allow

function robotsTxt (req, res) {
  res.type('text/plain')
  res.send(rules)
}

export { robotsTxt }
