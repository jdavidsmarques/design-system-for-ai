// Design System Live Style Guide - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling();
  initActiveNavigation();
  initCopyToClipboard();
  initInteractiveExamples();
  initAccessibilityFeatures();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Active navigation highlighting
function initActiveNavigation() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -50% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// Copy color codes to clipboard
function initCopyToClipboard() {
  const colorCards = document.querySelectorAll('.color-card');

  colorCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.setAttribute('title', 'Click to copy color code');

    card.addEventListener('click', () => {
      const colorCode = card.querySelector('code');
      if (colorCode) {
        const text = colorCode.textContent.trim();
        copyToClipboard(text);
        showCopyFeedback(card, 'Copied!');
      }
    });
  });

  // Add copy functionality to all code elements
  const codeElements = document.querySelectorAll('code');
  codeElements.forEach(code => {
    if (!code.closest('.color-card')) {
      code.style.cursor = 'pointer';
      code.setAttribute('title', 'Click to copy');

      code.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(code.textContent.trim());
        showCopyFeedback(code, 'Copied!');
      });
    }
  });
}

// Copy text to clipboard helper
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Failed to copy:', err);
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

// Fallback copy method for older browsers
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy failed:', err);
  }
  document.body.removeChild(textarea);
}

// Show copy feedback
function showCopyFeedback(element, message) {
  const feedback = document.createElement('div');
  feedback.textContent = message;
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--color-success);
    color: white;
    padding: 12px 24px;
    border-radius: var(--radius-medium);
    box-shadow: var(--shadow-large);
    z-index: 1000;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 300);
  }, 2000);
}

// Interactive examples
function initInteractiveExamples() {
  // Button hover state info
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.setProperty('--hover-scale', '1.02');
    });

    button.addEventListener('mouseleave', () => {
      button.style.setProperty('--hover-scale', '1');
    });
  });

  // Card interaction demo
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--color-primary)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'var(--color-gray-300)';
    });
  });
}

// Accessibility features
function initAccessibilityFeatures() {
  // Add keyboard navigation for interactive elements
  const interactiveElements = document.querySelectorAll('.color-card, code');

  interactiveElements.forEach(element => {
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '0');
    }

    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });

  // Add ARIA labels
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    const card = swatch.closest('.color-card');
    const colorName = card.querySelector('h4')?.textContent;
    const colorCode = card.querySelector('code')?.textContent;
    if (colorName && colorCode) {
      swatch.setAttribute('aria-label', `${colorName} color: ${colorCode}`);
    }
  });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .nav a.active {
    color: var(--color-primary);
    background-color: var(--color-gray-100);
  }

  code:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);
  }

  .color-card:focus {
    outline: 2px solid #0066CC;
    outline-offset: 2px;
  }

  .color-card:focus:not(:focus-visible) {
    outline: none;
  }
`;
document.head.appendChild(style);

// Console message
console.log('%c Design System Style Guide ', 'background: #ed002f; color: white; font-size: 16px; padding: 8px; border-radius: 4px;');
console.log('Interactive features enabled:');
console.log('- Click any color card or code to copy to clipboard');
console.log('- Smooth scrolling navigation');
console.log('- Active section highlighting');
console.log('- Full keyboard navigation support');
