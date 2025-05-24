function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
  


 function toggleTheme() {
      document.documentElement.classList.toggle('dark-theme');
    }



    const roles = [
  "Frontend Developer...",
  "Backend Developer...",
  "Full Stack Developer..."
];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const display = document.getElementById("role-text");

  if (isDeleting) {
    charIndex--;
    currentText = roles[index].substring(0, charIndex);
  } else {
    charIndex++;
    currentText = roles[index].substring(0, charIndex);
  }

  display.textContent = currentText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === roles[index].length) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }

  setTimeout(type, speed);
}

type();
