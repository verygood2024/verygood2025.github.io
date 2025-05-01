// 监听页面滚动
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    // 当前在哪一屏
    let currentScreen = Math.floor(scrollTop / viewportHeight);

    // 当前屏内的滚动进度（0-1）
    let progressInScreen = (scrollTop % viewportHeight) / viewportHeight;

    playAnimation(currentScreen, progressInScreen);
});

function playAnimation(screenIndex, progress) {
    // 根据不同屏幕播放动画
    if (screenIndex === 0) {
        // 第一屏的动画，根据progress(0~1)
        document.getElementById('screen1').style.opacity = 1 - progress;
        document.getElementById('screen1').style.transform = `translateY(${progress * -100}px)`;
    } else if (screenIndex === 1) {
        // 第二屏的动画
        document.getElementById('screen2').style.opacity = progress;
        document.getElementById('screen2').style.transform = `scale(${1 + progress * 0.5})`;
    } else if (screenIndex === 2) {
        // 第三屏
        document.getElementById('screen3').style.opacity = progress;
        document.getElementById('screen3').style.transform = `rotate(${progress * 360}deg)`;
    }
}
