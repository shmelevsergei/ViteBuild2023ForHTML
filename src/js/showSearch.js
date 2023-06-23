export const showSearch = () => {
   const menu = document.querySelector('.js-menu-desktop');
   const search = document.querySelector('.js-search');
   const buttonSearchOpen = document.querySelector('.js-button-search-open');
   const buttonSearchClose = document.querySelector('.js-button-search-close');
   const headerBottom = document.querySelector('.js-header-bottom');

   buttonSearchOpen.addEventListener('click', () => {
      search.classList.remove('hidden');
      menu.classList.add('hidden');
      headerBottom.classList.add('md:hidden');
   })

   buttonSearchClose.addEventListener('click', () => {
      search.classList.add('hidden');
      menu.classList.remove('hidden');
      headerBottom.classList.remove('md:hidden');
   })

}