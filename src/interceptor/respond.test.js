import test from 'ava'
import respond from './respond'

test('respond should work correctly', (t) => {
  const responds = []
  const lastRespondId = -1
  const i = { responds, lastRespondId }
  const url = Symbol('url')
  const opts = { someProp: Symbol('someProp') }
  const body = Symbol('body')
  respond(i, url, opts, body)
  const id = 0
  const [{ _resolve, _reject, promise }] = responds
  t.deepEqual(responds, [{ url, id, ...opts, body, _resolve, _reject, promise }])
})
