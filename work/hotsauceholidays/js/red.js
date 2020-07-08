$(window).on("load", function() {
  var loadingBar = document.getElementById("loadingBar");
  var loadingContent = document.getElementById("loadingContent");
  var options = {
    distID: "1514",
    solution3DName: "red-true-mild-sauce-v2",
    projectName: "hot-sauce-bottles",
    solution3DID: "674",
    containerID: "red-sauce",
    onLoadingChanged: function(loading) {
      loadingBar.style.width = loading.progress + "%";
    }
  };
  Unlimited3D.init(options, {}, function(error, status) {
    loadingContent.style.display = "none";
    if (error || !status) {
      console.log(error);
      return;
    }
  });
});
