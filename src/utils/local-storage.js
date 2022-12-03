import { AsyncLocalStorage } from 'node:async_hooks'

const localStorage = new AsyncLocalStorage()

export { localStorage }
