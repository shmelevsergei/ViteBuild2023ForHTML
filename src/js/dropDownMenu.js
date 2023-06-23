export const toggleClassLink = () => {
   const links = document.querySelectorAll('.js-color-link');
   const menuLinks = document.querySelectorAll('.js-menu-link');

   links.forEach(link => {
      link.addEventListener('click', () => {
         links.forEach(link => {
            if (link.classList.contains('activeMenu')) {
               link.classList.remove('activeMenu');
            }
         });
         link.classList.add('activeMenu');
      })
   });

   menuLinks.forEach(menuLink => {
      const menuList = menuLink.querySelector('.js-menu-list');
      const link = menuLink.querySelector('.js-color-link');
      menuList.classList.add('hidden');
      menuLink.addEventListener('mouseover', () => {
         menuList.classList.remove('hidden');
         menuList.classList.add('flex');
         if (link) {
            link.classList.add('activeMenu');
         }

      });
      menuLink.addEventListener('mouseout', (e) => {
         if (e.target == menuList) {
            changeClass();
         } else if (e.target != menuLink) {
            changeClass();
         }
      })
      function changeClass() {
         menuList.classList.remove('flex');
         menuList.classList.add('hidden');
         if (link) {
            link.classList.remove('activeMenu');
         }

      }
   });
}

export const menuMobileLInkOpen = () => {
   const menu = document.querySelector('.js-menu-mobile');
   const menuItems = menu.querySelectorAll('.js-menu-mobile-item');

   menuItems.forEach(item => {
      const menuLink = item.querySelector('.js-menu-mobile-link');
      const menuList = item.querySelector('.js-menu-mobile-list');
      menuList.classList.add('hidden')
      menuLink.addEventListener('click', (e) => {
         menuItems.forEach(item => {
            const menuLink = item.querySelector('.js-menu-mobile-link');
            const menuList = item.querySelector('.js-menu-mobile-list');
            if (menuLink.classList.contains('menuMobileLinkOpen')) {
               menuLink.classList.remove('menuMobileLinkOpen');
            }
            if (!menuList.classList.contains('hidden')) {
               menuList.classList.add('hidden');
            }
         });

         if (item.classList.contains('close')) {
            e.target.classList.add('menuMobileLinkOpen');
            item.classList.remove('close');
         } else {
            e.target.classList.remove('menuMobileLinkOpen');
            item.classList.add('close');
         }
         if (!item.classList.contains('close')) {
            menuList.classList.toggle('hidden');
         }
      })
   });
}

export const openCloseMenu = () => {
   const body = document.querySelector('body');
   const buttonOpen = document.querySelector('.js-menu-open');
   const buttonClose = document.querySelector('.js-menu-close');
   const menu = document.querySelector('.js-menu-mobile-block');
   buttonOpen.addEventListener('click', () => {
      menu.classList.remove('-translate-y-[150%]');
      body.classList.add('overflow-hidden');
   })
   buttonClose.addEventListener('click', () => {
      menu.classList.add('-translate-y-[150%]');
      body.classList.remove('overflow-hidden');
   })
}