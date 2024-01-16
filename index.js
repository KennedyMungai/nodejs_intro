const moment = require('moment')
const { v4: uuid } = require('uuid')

console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))

console.log(uuid())