import { stubIfTest } from 'dummee'
import { isRegExp, isString } from 'lodash'

async function handleRequest({ responds }, request) {
  console.log(`handling request ${request.url()}`)
  const i = responds.findIndex(r => {
    if (isRegExp(r.url)) {
      return r.url.test(request.url())
    }
    if (isString(r.url)) {
      return request.url().indexOf(r.url) > -1
    }
    throw new Error(`respond had url ${r.url} but should be a Regex or a String`)
  })
  if (i === -1) {
    return request.continue()
  }
  const [respond] = responds.splice(i, 1)
  await request.respond(respond)
  return respond._resolve()
}

export default stubIfTest(handleRequest)
