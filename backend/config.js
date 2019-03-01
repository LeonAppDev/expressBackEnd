module.exports = (process.env.NODE_ENV == 'development'? {
	//Use below when running on Docker
	//host:'host.docker.internal',
	//Use localhost when running by npm command
	host: 'localhost',
	db:'nzpt_entest',
	dbUser:'root',
	dbPassword:'Test11111',
	secret:'shhhhhhared-secret'
}:(process.env.NODE_ENV == 'staging'?{  
	//host:'172.17.0.1',
    host:'localhost', 
    db:'nzpt_entest',
	dbUser:'nzpt_en',
	dbPassword:'NZPT@data',
	secret:'1019sunnyai-secret'
}:{
	host:'host.docker.internal',
    db:'nzpt_en',
	dbUser:'nzpt_en',
	dbPassword:'NZPT@data',
	secret:'1019sunnyai-secret'
}));
