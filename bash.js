const pwd = require('./pwd');
const ls = require('./ls.js');

process.stdout.write('prompt> ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\n');
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  }
});
