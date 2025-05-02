const overlay = document.getElementById('文集');
const horizontal_bars = document.querySelector('.horizontal_bars');

const HorizontalBars_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.999) {
            // 元素几乎完全可见
            horizontal_bars.classList.remove('end');
            horizontal_bars.classList.add('start');
        } else {
            // 一旦有一点点离开视口，就触发这个分支
            horizontal_bars.classList.remove('start');
            horizontal_bars.classList.add('end');
        }
    });
}, { threshold: [0, 0.999] }); // 监听进入和稍微离开的状态

HorizontalBars_observer.observe(overlay);
