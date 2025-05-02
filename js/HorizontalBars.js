const overlay = document.getElementById('文集');
const horizontal_bars = document.querySelector('.horizontal_bars');

let lastScrollY = window.scrollY;

function checkOverlayFullScreen() {
    const rect = overlay.getBoundingClientRect();
    const scrollingUp = window.scrollY < lastScrollY;

    const fullyCoversViewport =
        rect.top <= 0 &&
        rect.bottom >= window.innerHeight;

    if (fullyCoversViewport) {
        horizontal_bars.classList.remove('end');
        horizontal_bars.classList.add('start');
        cards.forEach(card => card.classList.add('start'));
        applyCardAnimations();
    } else if (scrollingUp) {
        // 向上滚动时，视口中不再完全是 #文集
        horizontal_bars.classList.remove('start');
        horizontal_bars.classList.add('end');
    }

    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', checkOverlayFullScreen);
window.addEventListener('resize', checkOverlayFullScreen);

// 初始检查一次（防止页面加载时已在中间）
checkOverlayFullScreen();
