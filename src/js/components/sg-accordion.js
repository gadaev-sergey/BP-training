function startAccordion(id) {
  const accordion = document.getElementById(`${id}`);

  accordion.querySelectorAll('.sg-accordion__header').forEach(button => {
    const content = button.nextElementSibling;

    if (!content.style.maxHeight && button.classList.contains('sg-accordion__header--open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    button.addEventListener('click', () => {
      accordion.querySelectorAll('.sg-accordion__content').forEach(allContent => {
        allContent.style.maxHeight = null;
      })

      if (button.classList.contains('sg-accordion__header--open')) {
        button.classList.remove('sg-accordion__header--open');
        button.parentElement.classList.remove('sg-accordion__wrapper--open');
      } else {
        accordion.querySelectorAll('.sg-accordion__header').forEach(allButton => {
          allButton.classList.remove('sg-accordion__header--open');
          allButton.parentElement.classList.remove('sg-accordion__wrapper--open');
        })
        button.classList.add('sg-accordion__header--open');
        button.parentElement.classList.add('sg-accordion__wrapper--open');
      }

      if (!content.style.maxHeight && button.classList.contains('sg-accordion__header--open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    })
  })
}

startAccordion('accordion-profitable');
startAccordion('accordion-modal-phone');
