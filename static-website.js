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
  ~~ SELECTION ANIMATIONS ~~
*/

// add the animated class when the user mouses over the element 
function addAnimation(elem, animClass) {
  elem.classList.add(animClass);
}

// remove the animated class when the user's mouse leaves the element 
function removeAnimation(elem, animClass) {
  elem.classList.remove(animClass);
}

/*
  ~~ BUTTONS ~~
*/

// opens hulu plan options in a new window 
// runs when any of the buttons are clicked
function directToLogin() {
  window.open('https://signup.hulu.com/plans', '_blank');
}