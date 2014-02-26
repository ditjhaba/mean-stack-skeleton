	
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',
   { title: 'Express',
   	 todos: 
   	 [
   	 	{
   	 		description: "Learn Mean Stack",
   	 		due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
   	 		done : false
   	 	},
   	 	{
   	 		description: "Write the Create SMS page",
   	 		due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
   	 		done: false
   	 	}
   	 ] 
   	});
};