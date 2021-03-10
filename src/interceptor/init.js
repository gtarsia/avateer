import { stubIfTest } from 'dummee'

function init(self, { page }) {
  self.page = page
  self.responds = []
  self.lastRespondId = -1
  page.on('request', async (request) => {
    self.handleRequest(request)
  })
}

export default stubIfTest(init)
