// script.js

// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains('active');

    // Close all open accordion items
    document.querySelectorAll('.accordion-item.active').forEach(item => {
      item.classList.remove('active');
    });

    // Toggle the current accordion item
    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});
