function initOverlayScrollWatcher(overlayEl, triggerEl, cardEls) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口
                triggerEl.classList.remove('end');
                cardEls.forEach(card => card.classList.remove('end'));
                triggerEl.classList.add('start');
                cardEls.forEach(card => card.classList.add('start'));
                applyCardAnimations?.();
            } else {
                // 元素离开视口
                triggerEl.classList.remove('start');
                cardEls.forEach(card => card.classList.remove('start'));
                triggerEl.classList.add('end');
                cardEls.forEach(card => card.classList.add('end'));
                applyCardAnimations?.();
            }
        });
    }, {
        threshold: 0.1  // 元素至少有10%可见时算“进入”
    });

    observer.observe(overlayEl);
}



const overlay = document.getElementById('文集');
const horizontal_bars = document.querySelector('.horizontal_bars');
const cards_animation = document.querySelectorAll('.card');

initOverlayScrollWatcher(
    document.getElementById('文集'),
    document.getElementById('文集横条'),
    document.querySelectorAll('#文集卡片 .card')
);

initOverlayScrollWatcher(
    document.getElementById('集子'),
    document.getElementById('集子横条'),
    document.querySelectorAll('#集子卡片 .card')
);

initOverlayScrollWatcher(
    document.getElementById('作者'),
    document.getElementById('作者方形'),
    document.querySelectorAll('#作者卡片 .card')
);
