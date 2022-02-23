// const animation_observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const container = entry.target.querySelector('.scroll-in-container');
//     if (entry.isIntersecting) {
//       container.classList.add('scroll-in-container-animation');
//     }
//   });
// });

// for(let i = 1; i < 6; i++)
//   animation_observer.observe(document.querySelector(`.scroll-in-container-${i}`));


// const about_observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     let nav_button = document.querySelector('.about-nav');
//     if (entry.isIntersecting) {
//       nav_button.classList.add('nav-button-selected');
//     }
    
//     nav_button = document.querySelector('.experience-nav');
//     nav_button.classList.remove('nav-button-selected');
//     nav_button = document.querySelector('.projects-nav');
//     nav_button.classList.remove('nav-button-selected');
//   });
// });

// about_observer.observe(document.querySelector('#top'));



// const projects_observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     let nav_button = document.querySelector('.projects-nav');
//     if (entry.isIntersecting) {
//       nav_button.classList.add('nav-button-selected');
//       return;
//     }
//     nav_button.classList.remove('nav-button-selected');
//   });
// });

// projects_observer.observe(document.querySelector('#projects'));

// const experience_observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     let nav_button = document.querySelector('.experience-nav');
//     if (entry.isIntersecting) {
//       nav_button.classList.add('nav-button-selected');
//       return;
//     }

//     nav_button.classList.remove('nav-button-selected');
    
//   });
// });

// experience_observer.observe(document.querySelector('#experience'));