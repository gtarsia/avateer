import { stubIfTest } from 'dummee'

function respond(self, url, opts, body) {
  if (!body) {
    body = opts
  }
  self.lastRespondId += 1
  const id = self.lastRespondId
  let _resolve = null
  let _reject = null
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })
  self.responds.push({ ...opts, id, url, body, _resolve, _reject, promise })
  return promise
}

export default stubIfTest(respond)
