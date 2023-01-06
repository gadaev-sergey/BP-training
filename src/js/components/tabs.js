const targets = document.querySelectorAll('[data-tabs-target]')
const contents = document.querySelectorAll('[data-tabs-content]')

targets.forEach(target => {
  target.addEventListener('click', () => {
    if (!target.classList.contains('worker-btn--active')) {
      targets.forEach(target => target.classList.remove('worker-btn--active'))
      target.classList.add('worker-btn--active')
      contents.forEach(content => {
        content.dataset.tabsContent === target.dataset.tabsTarget ?
        content.classList.add('card-worker--active') :
        content.classList.remove('card-worker--active')
      })
    }
  })
})
