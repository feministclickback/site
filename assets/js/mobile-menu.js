function myFunction() {
  var x = document.getElementById("main-nav");
  var y = document.getElementById("toggle");
  var z = document.getElementById("toggle-button").getAttribute("aria-expanded");
  if (x.className === "main-nav group group-xxl") {
    x.className += " responsive group-column";
    y.src="/svgs/close.svg";
    z="true";
  } else {
    x.className = "main-nav group group-xxl";
    y.src="/svgs/menu-toggle.svg";
    z = "false";
  }
  document.getElementById("toggle-button").setAttribute("aria-expanded", z);
}
