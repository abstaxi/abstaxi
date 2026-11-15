const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('open');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const tripForm = document.querySelector('#trip-form');
if (tripForm) {
  tripForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!tripForm.reportValidity()) return;
    const data = new FormData(tripForm);
    const lines = [
      'Hello ABS Taxi & Cab, I would like to enquire about a trip.',
      `Name: ${data.get('name') || 'Not provided'}`,
      `Pickup: ${data.get('pickup')}`,
      `Destination: ${data.get('destination')}`,
      `Travel date: ${data.get('date') || 'Flexible / not specified'}`,
      `Passengers: ${data.get('passengers') || 'Not specified'}`,
      `Additional details: ${data.get('notes') || 'None'}`
    ];
    window.open(`https://wa.me/916378376402?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
}
