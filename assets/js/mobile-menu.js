function myFunction() {
  var x = document.getElementById("main-nav");
  var y = document.getElementById("toggle");
  if (x.className === "main-nav group group-xxl") {
    x.className += " responsive group-column";
    y.src="/svgs/close.svg";
  } else {
    x.className = "main-nav group group-xxl";
    y.src="/svgs/menu-toggle.svg";
  }

}
