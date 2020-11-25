const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#nav-links');
const navMenu = document.querySelector('.navigation');
const face = document.querySelector('.face');
const profile = document.querySelector('#profile');
const plus = document.querySelector('.plus');
const blurb = document.querySelector('.card-blurb')

// Toggle between showing and hiding the navigation menu
hamburger.addEventListener('click', e => {
  if (navLinks.style.display == "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
})

// document.addEventListener('click', e => {
//     if (e.target != hamburger || navMenu)
//     navLinks.style.display = "none";
// })

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

console.log(plus);

plus.addEventListener('click', e => {
  if (blurb.style.display = "none") {
    blurb.style.display = "block";
  } else if (blurb.style.display = "block") {
    blurb.style.display = "none";
}})
