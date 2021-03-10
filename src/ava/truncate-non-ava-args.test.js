import test from 'ava'
import truncateNonAvaArgs from './truncate-non-ava-args'

test('truncateNonAvaArgs should work correctly', (t) => {
  let p = { argv: ['asd', 'qwe'] }
  truncateNonAvaArgs(p)
  t.deepEqual(p.argv, ['asd', 'qwe'])

  p = { argv: ['asd', 'qwe', '--ava-args'] }
  truncateNonAvaArgs(p)
  t.deepEqual(p.argv, ['asd', 'qwe'])

  p = { argv: ['asd', 'qwe', '--ava-args', 'zxc'] }
  truncateNonAvaArgs(p)
  t.deepEqual(p.argv, ['asd', 'qwe', 'zxc'])

  p = { argv: ['asd', 'qwe', 'fgh', '--ava-args', 'zxc', 'rty'] }
  truncateNonAvaArgs(p)
  t.deepEqual(p.argv, ['asd', 'qwe', 'zxc', 'rty'])
})
