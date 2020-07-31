const compose = require('./compose')

function next (action) {
  console.log("[next]", action)
}

function fooMiddleware (next) {
  console.log("[fooMiddleware] trigger")
  return function next_from_foo (action) {
    console.log("[fooMiddleware] before next")
    next(action)
    console.log("[fooMiddleware] after next")
  }
}

function barMiddleware (next) {
  console.log("[barMiddleware] trigger")
  return function next_from_bar (action) {
    console.log("[barMiddleware] before next")
    next(action)
    console.log("[barMiddleware] after next")
  }
}

function looMiddleware (next) {
  console.log("[looMiddleware] trigger")
  return function next_from_bar (action) {
    console.log("[looMiddleware] before next")
    next(action)
    console.log("[looMiddleware] after next")
  }
}

const chain = compose(fooMiddleware, barMiddleware, looMiddleware)
const nextChain = chain(next)
nextChain("{none}")

/**
 * [looMiddleware] trigger
 * [barMiddleware] trigger
 * [fooMiddleware] trigger
 * [fooMiddleware] before next
 * [barMiddleware] before next
 * [looMiddleware] before next
 * [next] {none}
 * [looMiddleware] after next
 * [barMiddleware] after next
 * [fooMiddleware] after next
 */