

const statsConfig = [
  { target: 12, suffix: "", display: null },
  { target: 1, suffix: "", display: null },
  { target: 2, suffix: "", display: null },
  { target: 100, suffix: "+", display: null },
  { target: 365, suffix: "", display: null },
  { target: 1000, suffix: "+", display: "1k+" },
];


function easeOutQuart(t) {
  return 1 - --t * t * t * t;
}

function animateCounter(el, config, duration) {
  const { target, suffix, display } = config;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = easeOutQuart(progress);
    const current = Math.round(eased * target);

    if (display) {
      el.textContent = current >= target ? display : current;
    } else {
      el.textContent = current + suffix;
    }

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}


function initCounters() {
  const statNums = document.querySelectorAll(".stat-num");

  statNums.forEach((el, i) => {
    if (statsConfig[i]) el.textContent = "0";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        statNums.forEach((el, i) => {
          const config = statsConfig[i];
          if (!config) return;

          setTimeout(() => {
            animateCounter(el, config, 1400);
          }, i * 80);
        });

        observer.disconnect();
      });
    },
    { threshold: 0.3 }
  );

  const container = document.querySelector(".stats-flex");
  if (container) observer.observe(container);
}


document.addEventListener("DOMContentLoaded", initCounters);



// const form = document.getElementById("contactForm");

function validerForm() {

  let valid = true;

  clearErrors();

  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  let serviceInput = document.getElementById("service");
  let destinationInput = document.getElementById("destination");
  let departCityInput = document.getElementById("departCity");
  let dateInput = document.getElementById("date");
  let travelersInput = document.getElementById("travelers");
  let messageInput = document.getElementById("message");

  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const service = serviceInput.value;
  const destination = destinationInput.value;
  const departCity = departCityInput.value.trim();
  const travelDate = dateInput.value;
  const travelers = travelersInput.value;
  const message = messageInput.value.trim();

  if (fullName === "") {
    showError(nameInput, "Le nom complet est obligatoire");
    valid = false;
  } else if (!/^[A-Za-zÀ-ÿ\s'-]{3,}$/.test(fullName)) {
    showError(nameInput, "Veuillez entrer un vrai nom");
    valid = false;
  }

  if (email === "") {
    showError(emailInput, "L'email est obligatoire!")
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError(emailInput, "Veuillez entrer un email valide");
    valid = false;
  }

  if (phone === "") {
    showError(phoneInput, "Le téléphone est obligatoire!");
    valid = false;
  } else if (!/^\+?[0-9\s-]{8,16}$/.test(phone)) {
    showError(phoneInput, "Entrer un numéro valide");
    valid = false;
  }

  if (service === "") {
    showError(serviceInput, "Choisissez un service");
    valid = false;
  }

  if (destination === "") {
    showError(destinationInput, "Choisissez une destination");
    valid = false;
  }

  if (departCity === "") {
    showError(departCityInput, "La ville de départ est obligatoire!");
    valid = false;
  } else if (!/^[A-Za-zÀ-ÿ\s'-]{2,}$/.test(departCity)) {
    showError(departCityInput, "Entrez une ville valide");
    valid = false;
  }

  if (travelDate === "") {
    showError(dateInput, "Choisissez le nombres de voyageurs");
    valid = false;
  }

  if (travelers === "") {
    showError(travelersInput, "Choisissez le nombre de voyageurs");
    valid = false;
  }

  if (message === "") {
    showError(messageInput, "La demande spéciale est obligatoire!");
    valid = false;
  } else if (message.length < 10) {
    showError(messageInput, "Ecrivez une demande plus claire");
    valid = false;
  }

  if (valid) {
    document.getElementById("success-popup").classList.add("show");
  }


  function showError(input, message) {
    input.classList.add("input-error");

    const error = document.getElementById(input.id + "Error");
    error.textContent = message;
  }

  function clearErrors() {
    const inputs = document.querySelectorAll("input, select, textarea");
    const errors = document.querySelectorAll(".error");

    inputs.forEach(function (input) {
      input.classList.remove("input-error");
    });

    errors.forEach(function (error) {
      error.textContent = "";
    })
  }

}


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach(function (link) {
    let linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});




function contactForm() {
  let valid = true;

  clearErrors();

  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (fullName === "") {
    showError(nameInput, "Le nom complet est obligatoire");
    valid = false;
  } else if (!/^[A-Za-zÀ-ÿ\s'-]{3,}$/.test(fullName)) {
    showError(nameInput, "Veuillez entrer un vrai nom");
    valid = false;
  }

  if (email === "") {
    showError(emailInput, "L'email est obligatoire!")
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError(emailInput, "Vauillez entrer un email valide");
    valid = false;
  }

  if (message === "") {
    showError(messageInput, "La demande spéciale est obligatoire!");
    valid = false;
  } else if (message.length < 10) {
    showError(messageInput, "Ecrivez une demande plus claire");
    valid = false;
  }

  if (valid) {
    document.getElementById("success-popup").classList.add("show");
  }


  function showError(input, message) {
    input.classList.add("input-error");

    const error = document.getElementById(input.id + "Error");
    error.textContent = message;
  }

  function clearErrors() {
    const inputs = document.querySelectorAll("input, select, textarea");
    const errors = document.querySelectorAll(".error");

    inputs.forEach(function (input) {
      input.classList.remove("input-error");
    });

    errors.forEach(function (error) {
      error.textContent = "";
    })
  }



}
  function closePopup() {
    document.getElementById("success-popup").classList.remove("show");
    document.querySelector("form").reset();
}





