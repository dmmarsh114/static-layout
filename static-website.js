/*
  ~~ HEADER ~~
*/

// when the user scrolls the page, execute headerScroll
window.onscroll = function() { headerScroll() };

// the header element
var header = document.getElementById("myHeader");

// offsetTop is the position of the header
var sticky = header.offsetTop;

// add the sticky class to the header when the user scrolls 
function headerScroll() {
  // if the user scrolls (pageYOffset) past the header's position, add the sticky class
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*
  ~~ SELECTION ANIMATION ~~
*/

// add the selected class when the user mouses over the object 
function addAnimation(elem) {
  elem.classList.add("selected");
}

// remove the selected class when the user's mouse leaves the object 
function removeAnimation(elem) {
  elem.classList.remove("selected");
}