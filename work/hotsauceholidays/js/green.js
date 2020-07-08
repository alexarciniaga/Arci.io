$(window).on("load", function() {
  var loadingBar = document.getElementById("loadingBar");
  var loadingContent = document.getElementById("loadingContent");
  var options = {
    distID: "1507",
    solution3DName: "green-true-mild-sauce",
    projectName: "hot-sauce-bottles",
    solution3DID: "652",
    containerID: "green-sauce",
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
