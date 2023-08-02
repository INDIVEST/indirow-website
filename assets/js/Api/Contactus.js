const form = document.querySelector('#contact-formm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = 'https://indirow-development.racecondition.io/api/contact/contactUs';
  const headers = {
    'Content-Type': 'application/json',
     'token': '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',
  };
  try {
    console.log('formData:', Object.fromEntries(formData));
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    if (response.ok) {
      console.log('API response:', await response.json());
      const successMessage = document.querySelector('#success-message');
      successMessage.textContent = 'Thank you for contacting us! We will be in touch soon.';
    } else {
      console.error('API error:', await response.json());
    }
  } catch (error) {
    console.error('Network error:', error);
  }
});

