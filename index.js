import { animate } from 'popmotion';
import 'animate.css';

const solarFlareAnimations = {
  applyFlare: function(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.warn('Element not found');
      return;
    }

    // Add the solar flare effect
    element.classList.add('animate__animated', 'animate__fadeIn');
    animate({
      from: 0,
      to: 1,
      onUpdate: latest => {
        element.style.opacity = latest;
        element.style.filter = `brightness(${1 + latest})`;
      },
      onComplete: () => {
        element.classList.remove('animate__fadeIn');
        element.style.filter = '';
      }
    });
  }
};

export default solarFlareAnimations;
