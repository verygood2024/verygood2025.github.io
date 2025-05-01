const head = document.querySelector('.head');
let one_clouds = document.getElementById('one_clouds');
const img6 = head.querySelector('.img6');
const img10 = head.querySelector('.img10');

function handleScrollEffects() {
    let top = window.scrollY;

    requestAnimationFrame(function () {
        let img6x = 500 - top * 0.7;
        let img6s = 1 + top * 0.001;
        let img6y = 700 + top * 0.6;
        let img6o = 1.3 - top * 0.0008;

        if (img6) {
            img6.style.transition = 'transform 0.1s ease, opacity 0.1s ease';
            img6.style.transform = `translate(${img6x}px, ${img6y}px) scale(${img6s})`;
            img6.style.opacity = String(img6o);
        }

        if (head) {
            head.style.transition = 'opacity 0.2s ease';
            let headRect = head.getBoundingClientRect();
            let windowHeight = window.innerHeight;

            if (headRect.top < windowHeight && headRect.bottom > 0) {
                let visibleRatio = Math.min(1, Math.max(0, 1 - Math.abs(headRect.top) / windowHeight));
                head.style.opacity = visibleRatio.toFixed(2);
            } else {
                head.style.opacity = '0';
            }
        }

        if (one_clouds) {
            let img7 = one_clouds.querySelector('img[src="image/7.png"]');
            if (img6 && img7) {
                let oneCloudsRect = one_clouds.getBoundingClientRect();
                let windowHeight = window.innerHeight;
                let isScrolledDown = oneCloudsRect.top < 0;
                let isScrolledUp = oneCloudsRect.bottom > windowHeight;

                if (isScrolledDown) {
                    if (oneCloudsRect.top <= 0 && oneCloudsRect.bottom > 0) {
                        let fadeRatio = Math.min(1, Math.max(0, 1 - (oneCloudsRect.top / windowHeight)));
                        img7.style.transition = 'opacity 3s ease';
                        img7.style.opacity = fadeRatio.toFixed(2);
                    }
                } else if (isScrolledUp) {
                    img7.style.transition = 'opacity 1.5s ease';
                    img7.style.opacity = '0';
                }
            }
        }
    });
}

// 页面滚动时调用
window.addEventListener('scroll', handleScrollEffects);

// 页面加载完成后也调用一次
window.addEventListener('load', handleScrollEffects);