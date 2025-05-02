document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止跳转
        const card = this.parentElement;
        const url = this.href;
        const target = this.target;

        // 添加动画类
        card.classList.add('animate');

        // 动画持续 500ms 后跳转
        setTimeout(() => {
            if (target === "_blank") {
                window.open(url, '_blank');
            } else {
                window.location.href = url;
            }
        }, 500); // 与 CSS 动画时间一致
    });
});