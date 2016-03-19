var getRepos = require("./../js/js-codereview-week1.js").getRepos;

$(document).ready(function() {
  $(".userSearch").click(function() {
    event.preventDefault();
    var input = $("#searchInput").val();
    $("#searchInput").val("");

    getRepos(input);
  });
});
