#!/bin/env node
import launch from './launch'
import truncateNonAvaArgs from './ava/truncate-non-ava-args'

async function run() {
  await launch()
  truncateNonAvaArgs(process)
  /* eslint-disable-next-line global-require */
  require('ava/cli.js')
}

run()
