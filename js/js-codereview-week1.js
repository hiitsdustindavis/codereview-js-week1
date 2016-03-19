var apiKey = require('./../.env').apiKey;

exports.getRepos = function(input){
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i=0; i<response.length; i++) {
    repoArray = (response[i].name);
    $(".showUser").html("Check out <span>" + input + "</span>'s Repo's");
    $(".showRepo").append("<li>" + repoArray + "</li>");
    console.log(repoArray);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
