module.exports = (() => {

	switch(process.env.NODE_ENV)
	{
		case 'development': 
		    return {
				//Use below when running on Docker
				//host:'host.docker.internal',
				//Use localhost when running by npm command
				host: 'localhost',
				db:'nzpt_entest',
				dbUser:'root',
				dbPassword:'Test11111',
				secret:'shhhhhhared-secret'
				};

		case 'staging':
			return {  
			    host:'localhost', 
			    db:'nzpt_entest',
				dbUser:'nzpt_en',
				dbPassword:'NZPT@data',
				secret:'1019sunnyai-secret'
			    };

		case 'production':
			return {
				//host:'host.docker.internal',
				host:'localhost',
			    db:'nzpt_en',
				dbUser:'nzpt_en',
				dbPassword:'NZPT@data',
				secret:'1019sunnyai-secret'
			   };

		default: 
		   break;      
	}
})();
