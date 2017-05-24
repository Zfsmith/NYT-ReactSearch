var axios =require("axios");

//  API
var API = "02be6ef61f7a487796a0c215f60036d8";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(search) {

    console.log(search);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+API+"&q="+search;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      console.log(response.data.response.docs[0].headline.main);
      return response.data.response.docs[0].headline.main;
    });

    
 //    request.get({
	//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
	//   qs: {
	//     'api-key': search
	//   },
	// },function(err,response,body) {
	// 	body = JSON.parse(body);	
 //      	console.log(body);
 //        return body.data.results[0].formatted;
 //    })

  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;