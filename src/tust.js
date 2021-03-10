import test from 'ava'
import connect from './connect'
import Interceptor from './interceptor/Interceptor'

export default async function tust(title, cb) {
  const browser = await connect()
  const page = await browser.newPage()
  await page.setRequestInterception(true)
  const interceptor = new Interceptor({ page })
  return test(title, async (t) => {
    const utils = {
      respond: (...args) => interceptor.respond(...args),
    }
    await cb({ t, page, utils })
    // await interceptor.waitResponds()
    if (t.passed) {
      await page.close()
    }
  })
}
