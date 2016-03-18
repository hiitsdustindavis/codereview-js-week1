var apiKey = require('./../.env').apiKey;

exports.getRepos = function(input){
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i=0; i<response.length; i++) {
    nameArray = (response[i].name);
    $(".showUser").text("Check out <span>" + input + "</span>'s Repo's");
    $(".showRepo").append("<li>" + nameArray + "</li>");
    console.log(nameArray);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
