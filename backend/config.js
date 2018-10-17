module.exports = (process.env.NODE_ENV == 'development'? {
	host:'host.docker.internal',
	//host: 'localhost',
	db:'nzpt_entest',
	dbUser:'root',
	dbPassword:'Test11111'
}:(process.env.NODE_ENV == 'staging'?{  
	//host:'172.17.0.1',
        host:'localhost', 
        db:'nzpt_entest',
	dbUser:'nzpt_en',
	dbPassword:'NZPT@data'
}:{
	host:'host.docker.internal',
        db:'nzpt_en',
	dbUser:'nzpt_en',
	dbPassword:'NZPT@data'
}));
