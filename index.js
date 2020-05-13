'use strict'

const alfy = require('alfy')
const execa = require('execa')

async function runOsa(filePath) {
  const { stdout } = await execa('osascript', [filePath])

  return stdout
}

function resolveItems(str) {
  let items = str.split(', ').filter((item) => item !== 'Safari')

  const dividerIndex = items.findIndex((item) => item === 'missing value')

  items = items.slice(0, dividerIndex).map((item) => ({
    title: item,
    arg: item,
  }))

  return items
}

const CACHE_KEY = 'sfi-items'
const scriptPath = './devices.applescript'

let items = alfy.cache.get(CACHE_KEY)

if (items && alfy.input !== 'force') {
  items = JSON.parse(items)
} else {
  const result = await runOsa(scriptPath)
  items = resolveItems(result)
  alfy.cache.set(CACHE_KEY, JSON.stringify(items))
}

alfy.output(items)
