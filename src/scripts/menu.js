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
  



 /* const menuButtons = document.querySelectorAll('.menu-button');

menuButtons.forEach((e) => {
    e.addEventListener('click', () => {
        hamburger.classList.remove('expanded');
        navLinks.classList.remove('expanded');
    })
})/*