import puppeteer from 'puppeteer'
import { PORT } from './constants'

export default function launch(options = {}) {
  let { args = [] } = options
  args = [
    `--remote-debugging-port=${PORT}`,
   '--disable-web-security',
   '--disable-features=IsolateOrigins,site-per-process',
    ...args,
  ]
  const headless = false
  const devtools = true
  options = { headless, devtools, ...options, args }
  return puppeteer.launch(options)
}
