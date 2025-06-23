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
