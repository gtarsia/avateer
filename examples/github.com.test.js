import { tust } from '../src/avateer'

tust('example should have the right page', async ({ t, page, utils }) => {
  // const searchRespond = utils.respond(/data.json/g, '[]')
  await page.goto('https://github.com')
  // await searchRespond
  // t.regex(await page.$eval('p', e => e.innerText), /This domain is for use/)
  t.fail()
})
