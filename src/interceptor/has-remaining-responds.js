import { stubIfTest } from 'dummee'

function hasRemainingResponds(self) {
  return self.responds.length > 0
}

export default stubIfTest(hasRemainingResponds)
