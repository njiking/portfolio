document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav-links');
  
  hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          nav.classList.toggle('active');
  });

  // Initialize the phone number mask
var phoneMask = IMask(document.getElementById("phone"), {
  mask: "(000) 000-0000"
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


  document.addEventListener("DOMContentLoaded", function () {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    window.addEventListener("scroll", function () {
        scrollUpBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    });
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
