import puppeteer from 'puppeteer'
import { PORT } from './constants'

export default function connect(options = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const browserURL = `http://127.0.0.1:${PORT}`
      options = { ...options, browserURL }
      resolve(puppeteer.connect(options))
    }, 1000)
  })
}
