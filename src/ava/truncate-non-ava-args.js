
export default function truncateNonAvaArgs(p) {
  const first = p.argv.slice(0, 2)
  const i = p.argv.indexOf('--ava-args')
  const avaArgs = i === -1 ? [] : p.argv.slice(i + 1)
  p.argv = [...first, ...avaArgs]
}
