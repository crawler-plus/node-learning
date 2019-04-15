/**
 * Created by yb
 */
const cluster = require('cluster');
let data = 0;//这里定义数据不会被所有进程共享，各个进程有各自的内存区域
if (cluster.isMaster) { //主进程
    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    data = 5;
    console.log('DATA VALUE in MainProcess: %d ', data);
} else { //子进程,会被调用numCPUs次
    data++;
    console.log('DATA VALUE in ChildProcess %d: %d ', cluster.worker.id, data);
}
