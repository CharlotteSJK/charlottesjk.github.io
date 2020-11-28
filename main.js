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

// console.log(plus);

plus.addEventListener('click', e => {
  if (blurb.style.display = "none") {
    plus.innerHTML = "-";
    blurb.style.display = "block";
  } else {
    blurb.style.display = "none";
    plus.innerHTML = "+";
}})

document.querySelectorAll('.plus').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})

// plus.forEach();

// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }




// search.addEventListener('keyup', () => {
//   const searchTerm = search.value.toLowerCase();
//   const employeeNames = document.querySelectorAll('.name');
//   employeeNames.forEach(employeeName => {
//     const text = employeeName.textContent.toLowerCase();
//     const box = employeeName.parentElement.parentElement;
//     if(text.indexOf(searchTerm) > -1) {
//       box.style.display = "flex";
//     } else {
//       box.style.display = "none";  
//     }
// 	})
// });
