const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#nav-links');
const navMenu = document.querySelector('.navigation');
const face = document.querySelector('.face');
const profile = document.querySelector('#profile');

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



const hey = document.querySelector('.hey');
const iAm = document.querySelector('.i-am');
const nice = document.querySelector('.nice');
hey.innerHTML = hey.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
iAm.innerHTML = iAm.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
nice.innerHTML = nice.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.hey .letter',
    opacity: [0,1],
    easing: "easeInQuad",
    duration: 100,
    delay: (el, i) => 45 * (i+1)
  });

  anime.timeline({loop: false})
  .add({
    targets: '.i-am .letter',
    opacity: [0,1],
    easing: "easeInQuad",
    duration: 100,
    endDelay: 100,
    delay: (el, i) => 45 * (i+1)
  });

  anime.timeline({loop: false})
  .add({
    targets: '.nice .letter',
    opacity: [0,1],
    easing: "easeInQuad",
    duration: 100,
    delay: (el, i) => 45 * (i+1)
  });
