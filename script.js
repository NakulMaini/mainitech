// Tab switching for global currencies
function openCurrency(currencyKey) {
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

// Clipboard copying utility
function copyText(textToCopy) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = event.target.innerText;
    event.target.innerText = 'Copied!';
    setTimeout(() => {
      event.target.innerText = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
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