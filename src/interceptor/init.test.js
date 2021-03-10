import test from 'ava'
import dummee from 'dummee'
import init from './init'

test('init should work correctly', (t) => {
  const handleRequest = dummee()
  const i = { handleRequest }
  const on = dummee()
  const page = { on }
  init(i, { page })
  const lastRespondId = -1
  const responds = []
  t.deepEqual(i, { handleRequest, lastRespondId, responds, page })
  const c = on.calls[0]
  t.deepEqual(c.args[0], 'request')
  t.deepEqual(typeof c.args[1], 'function')

  const request = Symbol('request')
  c.args[1](request)
  t.deepEqual(handleRequest.calls, [{ args: [request] }])
})
