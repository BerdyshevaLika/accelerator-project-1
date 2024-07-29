const tabButtons = document.querySelectorAll('.price__tabs-nav-button');
const tabsContent = document.querySelectorAll('.price__tabs-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const tabButtonsTarget = evt.target.getAttribute('data-tab');

    tabButtons.forEach((element) => {
      element.classList.remove('price__tabs-nav-button--active');
    });

    tabsContent.forEach((element) => {
      element.classList.add('price__tabs-content--hidden');
    });

    button.classList.add('price__tabs-nav-button--active');

    document.getElementById(tabButtonsTarget).classList.remove('price__tabs-content--hidden');

  });
});
