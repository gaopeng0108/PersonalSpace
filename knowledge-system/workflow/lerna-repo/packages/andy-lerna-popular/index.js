const dayjs = require('dayjs');
const { format } = require('andy-lerna-core');

console.log(dayjs());
console.log(dayjs().format(format));
