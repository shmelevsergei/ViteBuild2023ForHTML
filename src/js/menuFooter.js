export const menuFooter = () => {
   const menuButton = document.querySelector('.js-button-menu-footer');
   const menu = document.querySelector('.js-menu-footer');

   menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('menuFooterShow');
      menu.classList.toggle('hidden');
   })
}