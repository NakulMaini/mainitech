// FAQ Accordion Handler
document.addEventListener('DOMContentLoaded', () => {
  initFaq();
});

function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.onclick = function () {
      const parent = this.parentElement;
      const isOpen = parent.classList.contains('active');
      
      // Close other accordions in the same list
      const allItems = parent.parentElement.querySelectorAll('.faq-item');
      allItems.forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.innerText = '+';
      });

      // Toggle clicked item
      if (!isOpen) {
        parent.classList.add('active');
        const icon = this.querySelector('.faq-icon');
        if (icon) icon.innerText = '−';
      }
    };
  });
}

// Multi-Currency Switcher
function switchCurrency(currencyKey, buttonElement) {
  document.querySelectorAll('.currency-chip').forEach(c => c.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');
  document.querySelectorAll('.pay-panel').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('pay-' + currencyKey);
  if (target) target.classList.add('active');
}

// "Get Started Today" Drawer Toggle
function toggleSettlementDrawer() {
  const drawer = document.getElementById('settlement-drawer');
  if (drawer) {
    drawer.classList.toggle('is-open');
    if (drawer.classList.contains('is-open')) {
      drawer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Copy Action Feedback
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

// Modals
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
  if (event.target.id === 'document-modal') closeModalDirect();
}