/* funtion to grow textarea of contact if its necesary */

function adjustHeight(event) {
  	const textarea = event.target;
  	if (!textarea.dataset.minHeight) {
  		textarea.dataset.minHeight = textarea.offsetHeight;
 	}
  	const minHeight = parseInt(textarea.dataset.minHeight, 10);
  	if (textarea.scrollHeight > textarea.offsetHeight) {
  		textarea.style.height = 'auto';
  		textarea.style.height = `${Math.max(textarea.scrollHeight, minHeight)}px`;
  	}
  }
  const textarea = document.getElementById('textareaMessage');
  textarea.addEventListener('input', adjustHeight);

//   function to clear form
  document.addEventListener('DOMContentLoaded', function () {
		const form = document.getElementById('contact-form');
		const errorSpan = document.querySelector('.error-span');

		form.addEventListener('submit', async function (e) {
			e.preventDefault(); // Evita recargar la página

			const formData = new FormData(form);

			try {
				const response = await fetch(form.action, {
					method: form.method,
					body: formData,
					headers: {
						Accept: 'application/json',
					},
				});

				if (response.ok) {
					form.reset(); // ✅ Limpia el formulario
					errorSpan.textContent = '¡Mensaje enviado con éxito!';
					errorSpan.style.color = 'green';
				} else {
					const data = await response.json();
					if (data.errors) {
						errorSpan.textContent = data.errors.map((error) => error.message).join(', ');
					} else {
						errorSpan.textContent = 'Ocurrió un error al enviar el mensaje.';
					}
					errorSpan.style.color = 'red';
				}
			} catch (error) {
				errorSpan.textContent = 'No se pudo enviar el formulario. Inténtelo más tarde.';
				errorSpan.style.color = 'red';
			}
		});
  });