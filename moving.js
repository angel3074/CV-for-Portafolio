
//Get the button:
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scrolls ups when user clicks on it

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}