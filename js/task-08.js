const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Поля повинні бути заповнені');
  }

  const data = {
    emailUser: email.value,
    passwordUser: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
