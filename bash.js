// output a prompt
process.stdout.write('prompt> ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\n');
  const pwd = require('./pwd');
  const ls = require('./ls');
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  }
});
