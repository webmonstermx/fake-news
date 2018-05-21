module.exports = {

	friendlyName : 'Submit article',

	description : 'Stores a new article',

	inputs : {
		 title : {
      description: 'The main title of an article.',
      example: 'Webmonster ends a project.'
    },
    	article : {
    		description : 'where the actual article is described',
    		example: 'After getting absolutely wasted, Webmonster devteam finally decides to get a fully working app.',
    	},
    	meta : {
    		description : 'information that will be shown when sharing article',
    		example: 'NASA informs that great improvements are yet to come thanks to Webmonster',
    	},
	},

	exits : {
		success : {
			description: 'A new article was stored.'
		},
		notFound : {

		}
	},	



	fn : async function (inputs, exits) {
		console.log( inputs.title );
		console.log( inputs.article );
		console.log( inputs.meta );
		var createdArticle = await Article.create({text: inputs.article, title: inputs.title, meta: inputs.meta, author: 'anonymous'}).fetch();
		console.log(createdArticle.title);
		return exits.success()
	}
	};