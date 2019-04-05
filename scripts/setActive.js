window.onload = function() {

    var navChildren = document.getElementById("nav-item-list").children;

    for (i = 0 ; i < navChildren.length ; i ++) {
      if (document.title.includes(navChildren[i].innerHTML)) {
        navChildren[i].classList.add("active-link");
      }
    }
  };