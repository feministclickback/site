function myFunction() {
  var x = document.getElementById("main-nav");
  var y = document.getElementById("toggle");
  if (x.className === "main-nav") {
    x.className += " responsive";
    y.src="/svgs/close.svg";
  } else {
    x.className = "main-nav";
    y.src="/svgs/menu-toggle.svg";
  }

}
