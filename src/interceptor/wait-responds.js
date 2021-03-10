import { stubIfTest } from 'dummee'

function waitResponds(self) {
  return new Promise(async (resolve, reject) => {
    if (self.responds.length === 0) {
      return resolve()
    }
    const timeoutId = setTimeout(() => {
      if (self.responds.length > 0) {
        const error = [
          'Failed to intercept the following responds:',
          ...self.responds.map(({ id, url }) => `(${id}) url: ${url}`),
        ].join('\n')
        throw new Error(error)
      }
    }, 3000)
    await Promise.all(self.responds.map(({ promise }) => promise))
    clearTimeout(timeoutId)
    resolve()
  })
}

export default stubIfTest(waitResponds)
