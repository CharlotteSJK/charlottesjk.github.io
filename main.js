const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#nav-links');
const face = document.querySelector('.face');
const profile = document.querySelector('#profile');
const pluses = document.querySelectorAll('.plus');
const blurb = document.querySelectorAll('.card-blurb');

// Toggle between showing and hiding the navigation menu when hamburger menu is clicked

hamburger.addEventListener('click', e => {
  if (navLinks.style.display == "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
})

document.addEventListener('click', e => {
    if (e.target != hamburger && navLinks.style.display == "block")
    navLinks.style.display = "none";
})

//Makes the colors change on the profile image on hover

face.addEventListener('mouseover', e => {
  if (e.target === face) {
    profile.src = "images/profile-circles-pinks-alt.png";
  }
})

face.addEventListener('mouseout', e => {
  if (e.target === face) {
    profile.src = "images/profile-circles-pinks.png";
  }
})

//Shows or hides the description for each project

pluses.forEach((plus, index) => {
  plus.addEventListener("click", (event) => {
    if (blurb[index].style.display == "none") {
      plus.innerHTML = "-";
      blurb[index].style.display = "block";
    } else {
      blurb[index].style.display = "none";
      plus.innerHTML = "+";
  }});
});









