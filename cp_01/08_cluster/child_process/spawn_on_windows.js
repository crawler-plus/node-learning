/**
 * Created by yb
 */
const child_process = require('child_process');
const ls = child_process.spawn('powershell', ['dir']);
ls.stdout.on('data', data => {
    console.log("stdout:", data.toString());
});

ls.stderr.on('data', data => {
    console.log("stderr:", data.toString());
});

ls.on('close', code => {
    console.log("child process exited with code", code);
});