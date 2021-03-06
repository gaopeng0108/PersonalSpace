let times = 0;
process.on('beforeExit', (code) => {
	if (times < 10) {
		setTimeout(() => {
			console.log('times', times);
			console.log('code', code);
	  	}, 0);
	  	times++;
	}
});

process.on('exit', (code) => {
	console.log(`即将退出，退出码：${code}`);
});

process.on('exit', (code) => {
	// exit 事件监听器的回调函数只能包含同步操作，不允许包含异步操作
  	setTimeout(() => {
    	console.log('该函数不会被执行');
  	}, 0);
});

console.log(`Current directory: ${process.cwd()}`);