var getRepos = require("./../js/js-codereview-week1.js").getRepos;
var input;

$(document).ready(function() {
  $(".userSearch").click(function() {
    event.preventDefault();
    // var input = $("#searchInput").val();
    // $("#searchInput").val("");
    $(".showUser").text("something" + input);
    getRepos();
    // console.log(response);
  });
});

// Steps
// Pass input to .get url
// move get url to document?
// use getRepos.getRepos with (some object property argument) to access user object.property
//
//
