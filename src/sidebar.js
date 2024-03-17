// main.js

document.addEventListener('DOMContentLoaded', function () {
    const sidebarButton = document.querySelector('[data-drawer-toggle="default-sidebar"]');
    const sidebar = document.getElementById('default-sidebar');
    boyd = document.querySelector('body');
    boyd.classList.remove('overflow-hidden');
    boyd.classList.add('overflow-auto');

  
    sidebarButton.addEventListener('click', function () {
      sidebar.classList.toggle('-translate-x-full');
    });
  });
  