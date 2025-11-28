/**
 * Layout Component - JavaScript Behaviors
 * Handles mobile navigation toggle and user menu interactions
 */

'use strict';

/**
 * Inicializa o componente Layout
 */
const initLayout = () => {
  initMobileNavigation();
  initUserMenu();
  initKeyboardNavigation();
};

/**
 * Navegação Mobile
 * Controla o toggle do menu de navegação em dispositivos móveis
 */
const initMobileNavigation = () => {
  const mobileToggle = document.querySelector('.layout-base__mobile-toggle');
  const nav = document.querySelector('.layout-base__nav');

  if (!mobileToggle || !nav) return;

  const handleMobileToggle = () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';

    mobileToggle.setAttribute('aria-expanded', !isExpanded);

    if (!isExpanded) {
      nav.style.display = 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.backgroundColor = 'var(--color-white)';
      nav.style.borderTop = '1px solid var(--color-gray-300)';
      nav.style.padding = 'var(--space-md)';
      nav.style.boxShadow = 'var(--shadow-medium)';

      const navList = nav.querySelector('.layout-base__nav-list');
      if (navList) {
        navList.style.flexDirection = 'column';
        navList.style.alignItems = 'stretch';
        navList.style.gap = 'var(--space-xs)';
      }
    } else {
      nav.style.display = '';
      nav.style.position = '';
      nav.style.top = '';
      nav.style.left = '';
      nav.style.right = '';
      nav.style.backgroundColor = '';
      nav.style.borderTop = '';
      nav.style.padding = '';
      nav.style.boxShadow = '';

      const navList = nav.querySelector('.layout-base__nav-list');
      if (navList) {
        navList.style.flexDirection = '';
        navList.style.alignItems = '';
        navList.style.gap = '';
      }
    }
  };

  mobileToggle.addEventListener('click', handleMobileToggle);

  // Fechar menu ao clicar num link
  const navLinks = nav.querySelectorAll('.layout-base__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileToggle.getAttribute('aria-expanded') === 'true') {
        handleMobileToggle();
      }
    });
  });

  // Fechar menu ao redimensionar para desktop
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth >= 768 && mobileToggle.getAttribute('aria-expanded') === 'true') {
        handleMobileToggle();
      }
    }, 150);
  });
};

/**
 * Menu do Utilizador
 * Controla o dropdown do menu do utilizador
 */
const initUserMenu = () => {
  const userButton = document.querySelector('.layout-base__user-button');
  const userMenu = document.querySelector('.layout-base__user-menu');

  if (!userButton || !userMenu) return;

  const toggleUserMenu = () => {
    const isExpanded = userButton.getAttribute('aria-expanded') === 'true';
    userButton.setAttribute('aria-expanded', !isExpanded);
    userMenu.hidden = isExpanded;
  };

  const closeUserMenu = () => {
    userButton.setAttribute('aria-expanded', 'false');
    userMenu.hidden = true;
  };

  userButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleUserMenu();
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', (event) => {
    const isClickInside = userButton.contains(event.target) || userMenu.contains(event.target);
    if (!isClickInside && !userMenu.hidden) {
      closeUserMenu();
    }
  });

  // Fechar menu ao pressionar Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !userMenu.hidden) {
      closeUserMenu();
      userButton.focus();
    }
  });
};

/**
 * Navegação por Teclado
 * Melhora a acessibilidade para utilizadores de teclado
 */
const initKeyboardNavigation = () => {
  const userMenu = document.querySelector('.layout-base__user-menu');

  if (!userMenu) return;

  const menuLinks = userMenu.querySelectorAll('.layout-base__user-menu-link');

  userMenu.addEventListener('keydown', (event) => {
    const currentIndex = Array.from(menuLinks).indexOf(document.activeElement);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (currentIndex < menuLinks.length - 1) {
          menuLinks[currentIndex + 1].focus();
        } else {
          menuLinks[0].focus();
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (currentIndex > 0) {
          menuLinks[currentIndex - 1].focus();
        } else {
          menuLinks[menuLinks.length - 1].focus();
        }
        break;

      case 'Home':
        event.preventDefault();
        menuLinks[0].focus();
        break;

      case 'End':
        event.preventDefault();
        menuLinks[menuLinks.length - 1].focus();
        break;
    }
  });
};

/**
 * Scroll suave para âncoras
 * Melhora a experiência de navegação interna
 */
const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Atualizar foco para acessibilidade
        targetElement.focus({ preventScroll: true });

        // Atualizar URL sem scroll
        history.pushState(null, null, targetId);
      }
    });
  });
};

/**
 * Inicialização quando o DOM estiver pronto
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLayout);
} else {
  initLayout();
}

// Inicializar scroll suave
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSmoothScroll);
} else {
  initSmoothScroll();
}

// Exportar funções para uso externo (se necessário)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initLayout,
    initMobileNavigation,
    initUserMenu,
    initKeyboardNavigation,
    initSmoothScroll
  };
}
