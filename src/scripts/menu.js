// close nav in mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('expanded');
});

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('expanded');
  });
});



// Handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        alert("Form submitted!");
      } else {
        console.log(response);
        alert("Something went Wrong!");
      }
    });
  });

  // quick upscroll
if (window.innerWidth > 699) {
document.addEventListener("DOMContentLoaded", function () {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    window.addEventListener("scroll", function () {
        scrollUpBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    });
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
}

  // loading screen
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.loading-screen').style.display = 'none';
  }, 1000);
});


