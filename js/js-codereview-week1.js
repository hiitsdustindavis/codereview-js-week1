var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var nameArray = [];
  var input = $("#searchInput").val();
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(response[0].name);


    for (var i=0; i<response.length; i++)
    for (var name in response[i]) {
        // console.log("Item name: "+name);
        // console. log("Source: "+response[i][name]);
        // console.log(responsse[i].created_at);
    nameArray = (response[i].name);
    console.log(nameArray);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  // console.log(nameArray);
  return nameArray;
};
