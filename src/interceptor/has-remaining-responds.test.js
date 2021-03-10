import test from 'ava'
import hasRemainingResponds from './has-remaining-responds'

test('hasRemainingResponds should work correctly', (t) => {
  const responds = []
  const i = { responds }
  t.deepEqual(hasRemainingResponds(i), false)

  responds.push(Symbol())
  t.deepEqual(hasRemainingResponds(i), true)
})
