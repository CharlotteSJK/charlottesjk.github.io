const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#nav-links');
const navMenu = document.querySelector('.navigation');
const face = document.querySelector('.face');
const profile = document.querySelector('#profile');
const pluses = document.querySelectorAll('.plus');
const blurb = document.querySelector('.card-blurb');

// Toggle between showing and hiding the navigation menu

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

// plus.addEventListener('click', e => {
//   if (blurb.style.display == "none") {
//     plus.innerHTML = "-";
//     blurb.style.display = "block";
//   } else {
//     blurb.style.display = "none";
//     plus.innerHTML = "+";
// }})

pluses.forEach((plus) => {
  plus.addEventListener("click", (event) => {
    if (blurb.style.display == "none") {
      plus.innerHTML = "-";
      blurb.style.display = "block";
    } else {
      blurb.style.display = "none";
      plus.innerHTML = "+";
  }});
});









