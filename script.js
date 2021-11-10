const submit = document.getElementById('submit');
const e = document.getElementById('email');
const p = document.getElementById('password');

submit.addEventListener('click', () => {
  if (e.value === 'tryber@teste.com' && p.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
agreement.onchange = function () {
  submitBtn.disabled = !this.checked;
};
