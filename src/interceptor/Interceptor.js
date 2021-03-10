import init from './init'
import respond from './respond'
import handleRequest from './handle-request'
import hasRemainingResponds from './has-remaining-responds'
import waitResponds from './wait-responds'

export default class Interceptor {
  constructor(args) {
    init(this, args)
  }
  respond(...args) {
    return respond(this, ...args)
  }
  handleRequest(request) {
    return handleRequest(this, request)
  }
  hasRemainingResponds() {
    return hasRemainingResponds(this)
  }
  waitResponds() {
    return waitResponds(this)
  }
}
