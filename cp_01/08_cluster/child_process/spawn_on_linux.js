/**
 * Created by yb
 */
const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', data => {
    console.log("stdout:", data.toString());
});

ls.stderr.on('data', data => {
    console.log("stderr:", data.toString());
});

ls.on('close', code => {
    console.log("child process exited with code", code);
});

