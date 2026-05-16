const loadBackend = document.getElementById('loadBackend');
const backendContent = document.getElementById('backendContent');

loadBackend.addEventListener('click', () => {
  const data = {
    status: 'success',
    message: 'Contoh backend response bekerja.',
    services: [
      'API data produk',
      'Form order Banwich',
      'Autentikasi pengguna simple'
    ]
  };

  backendContent.innerHTML = `
    <p><strong>Status:</strong> ${data.status}</p>
    <p>${data.message}</p>
    <p><strong>Fitur backend:</strong></p>
    <ul>${data.services.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
});
