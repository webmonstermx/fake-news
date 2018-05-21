newArticle =  {
	title : 'add a title ',
	article : 'add a funny story', 
	meta : 'add some shareable info '
};



module.exports = {

	friendlyName : 'Nueva nota',

	description : 'Escribir un articulo nuevo para ser almacenado',

	exits : {
		success : {
			responseType: 'view',
			viewTemplatePath: 'pages/news/article'
		},
		notFound : {

		}
	},	



	fn : async function (inputs, exits) {
		return exits.success({newArticle})
	}
	};