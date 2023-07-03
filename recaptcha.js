document.getElementById('captcha-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse.length === 0) {
    alert('Please complete the reCAPTCHA.');
    return;
  }

  // If reCAPTCHA is completed, you can display the IP or proceed with other actions
  alert('reCAPTCHA completed. IP 1: phorast.duckdns.org - IP 2: text-ross.joinmc.link');

  // Reset the reCAPTCHA widget after form submission
  grecaptcha.reset();
});