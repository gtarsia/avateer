import test from 'ava'
import Interceptor from './Interceptor'
import init from './init'
import respond from './respond'
import handleRequest from './handle-request'
import hasRemainingResponds from './has-remaining-responds'
import waitResponds from './wait-responds'

init.cb = () => {}

function inst() {
  const on = () => {}
  const page = { on }
  return new Interceptor({ page })
}

test('init should be called correctly', (t) => {
  const page = {}
  const i = new Interceptor({ page })
  t.deepEqual(init.calls, [{ args: [i, { page }] }])
})

test('respond should be called correctly', (t) => {
  respond.cb = () => {}
  const i = inst()
  const s = Symbol('arg')
  i.respond(s)
  t.deepEqual(respond.calls, [{
    args: [i, s]
  }])
})

test('handleRequest should be called correctly', (t) => {
  handleRequest.cb = () => {}
  const i = inst()
  const s = Symbol('arg')
  i.handleRequest(s)
  t.deepEqual(handleRequest.calls, [{
    args: [i, s]
  }])
})

test('hasRemainingResponds should be called correctly', (t) => {
  hasRemainingResponds.cb = () => {}
  const i = inst()
  i.hasRemainingResponds()
  t.deepEqual(hasRemainingResponds.calls, [{
    args: [i]
  }])
})

test('waitResponds should be called correctly', (t) => {
  waitResponds.cb = () => {}
  const i = inst()
  i.waitResponds()
  t.deepEqual(waitResponds.calls, [{
    args: [i]
  }])
})
