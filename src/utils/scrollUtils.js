import { TIMINGS } from '../constants/index.js';

export const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
        const headerOffset = TIMINGS.HEADER_HEIGHT; // Header height + slight buffer
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        return true; // Signal that scroll happened
    }
    return false;
};
