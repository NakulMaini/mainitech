// Tab switching for global currencies
function openCurrency(currencyKey, event) {
  const panels = document.querySelectorAll('.tab-panel');
  const buttons = document.querySelectorAll('.tab-btn');

  panels.forEach(panel => panel.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(currencyKey);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

// Clipboard copying utility with visual feedback
function copyText(textToCopy, event) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    const targetBtn = event.target;
    const originalText = targetBtn.innerText;
    targetBtn.innerText = 'Copied!';
    setTimeout(() => {
      targetBtn.innerText = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Copy failed: ', err);
  });
}

// Interactive FAQ accordions
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.classList.toggle('active');
    const icon = button.querySelector('.faq-icon');
    if (icon) {
      icon.innerText = parent.classList.contains('active') ? '−' : '+';
    }
  });
});

// Modal Logic for LOR Previews
function openPdfModal(fileUrl, title) {
  const modal = document.getElementById('document-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.innerText = title;
  modalBody.innerHTML = `<iframe src="${fileUrl}" title="${title}"></iframe>`;
  modal.style.display = 'flex';
}

function openImageModal(fileUrl, title) {
  const modal = document.getElementById('document-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.innerText = title;
  modalBody.innerHTML = `<img src="${fileUrl}" alt="${title}">`;
  modal.style.display = 'flex';
}

function closeModalDirect() {
  const modal = document.getElementById('document-modal');
  const modalBody = document.getElementById('modal-body');
  modal.style.display = 'none';
  modalBody.innerHTML = '';
}

function closeModal(event) {
  if (event.target.id === 'document-modal') {
    closeModalDirect();
  }
}