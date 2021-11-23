const fs = require('fs')
const path = require('path')

const json = fs.readFileSync(
  path.join(__dirname, '../snippets/snippets.code-snippets'),
  'utf-8'
)

const data = JSON.parse(json)

const res = {}

Object.keys(data).forEach(key => {
  const item = data[key]

  res[item.prefix] = String(item.body).replace(/\"\$1\"/, ' ')
})

console.log(res)
