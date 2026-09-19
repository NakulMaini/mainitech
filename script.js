// Interactive Multi-Currency Switcher
function switchCurrency(currencyKey, buttonElement) {
  document.querySelectorAll('.currency-chip').forEach(c => c.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  document.querySelectorAll('.pay-panel').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('pay-' + currencyKey);
  if (target) target.classList.add('active');
}

// Inline Data Copy with Feedback
function copyData(textToCopy, btn) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    const orig = btn.innerText;
    btn.innerText = 'Copied!';
    btn.style.background = '#10b981';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.innerText = orig;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
}

// Global Accordion Handler
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.classList.toggle('active');
      const icon = btn.querySelector('.faq-icon');
      if (icon) {
        icon.innerText = parent.classList.contains('active') ? '−' : '+';
      }
    });
  });
});

// Modal Logic for Signed Letters of Recommendation
function openPdfModal(fileUrl, title) {
  const modal = document.getElementById('document-modal');
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerHTML = `<iframe src="${fileUrl}" title="${title}"></iframe>`;
  modal.style.display = 'flex';
}

function openImageModal(fileUrl, title) {
  const modal = document.getElementById('document-modal');
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerHTML = `<img src="${fileUrl}" alt="${title}">`;
  modal.style.display = 'flex';
}

function closeModalDirect() {
  document.getElementById('document-modal').style.display = 'none';
  document.getElementById('modal-body').innerHTML = '';
}

function closeModal(event) {
  if (event.target.id === 'document-modal') {
    closeModalDirect();
  }
}