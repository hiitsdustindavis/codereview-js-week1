var apiKey = require('./../.env').apiKey;


exports.getRepos = function(input){
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i=0; i<response.length; i++) {
    repoName = (response[i].name);
    repoDscrpt = (response[i].description);

    if (repoDscrpt === "") {
      $(".showRepo").append("<ul><li>" + repoName + "</li>" + "<li><em>No Description</em></li></ul>");
    } else {
      $(".showRepo").append("<ul><li>" + repoName + "</li>" + "<li>" + repoDscrpt + "</li></ul>");
    }

    console.log(repoDscrpt);
    $(".showUser").html("Check out <span>" + input + "'s</span> Repo's");
    // $(".showRepo").append("<ul><li>" + repoName + "</li>" + "<li>" + repoDscrpt + "</li></ul>");
    console.log(repoName);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
