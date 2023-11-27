document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const dismissButton = document.getElementById("dismiss");
  const emailInput = document.querySelector(".newsletter__details--input");
  const newsletterEl = document.querySelector(".newsletter");
  const successEl = document.querySelector(".success");
  const emailSpan = document.querySelector(".email");
  const errorMessage = document.querySelector(".error__message");

  function validateEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

  function showSuccess(email) {
    emailSpan.textContent = email;
    newsletterEl.classList.add("hidden");
    successEl.classList.remove("hidden");
  }

  dismissButton.addEventListener("click", function (event) {
    successEl.classList.add("hidden");
    newsletterEl.classList.remove("hidden");
    emailInput.value = "";
  });

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
      errorMessage.classList.add("hidden");
      emailInput.classList.remove("input-error");
      showSuccess(email);
    } else {
      errorMessage.classList.remove("hidden");
      emailInput.classList.add("input-error");
    }
  });

  emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    if (validateEmail(email)) {
      errorMessage.classList.add("hidden");
      emailInput.classList.remove("input-error");
    }
  });
});
