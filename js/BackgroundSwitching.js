let sum_img = document.querySelector('.sun_img')
let currentColors = ["#5F9EA0", "#4682B4", "#B0C4DE"];
const originColors = [...currentColors];
const targetColors = ["#15347b", "#15347b", "#15347b"];

let animationId = null;

// 缓动
const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// HEX <-> RGB
const hexToRgb = hex => {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
};
const rgbToHex = (r, g, b) => "#" + [r, g, b].map(x => (x = x.toString(16)).length < 2 ? "0" + x : x).join('');

// 插值颜色
const lerpHexColor = (a, b, t) => {
  const s = hexToRgb(a), e = hexToRgb(b);
  return rgbToHex(
    Math.round(s.r + (e.r - s.r) * t),
    Math.round(s.g + (e.g - s.g) * t),
    Math.round(s.b + (e.b - s.b) * t)
  );
};

// 动画时长估算
const calculateDuration = (from, to) => {
  const maxDist = Math.hypot(255, 255, 255);
  const avgDist = from.reduce((sum, c, i) => {
    const a = hexToRgb(c), b = hexToRgb(to[i]);
    return sum + Math.hypot(b.r - a.r, b.g - a.g, b.b - a.b);
  }, 0) / from.length;
  return Math.min(8000, Math.max(1000, avgDist / maxDist * 8000));
};

// 应用背景
function applyBackground(colors) {
    document.body.style.backgroundImage = `linear-gradient(to right, ${colors.join(", ")})`;
    document.body.style.backgroundColor = '';
}

// 通用动画
function animate(toColors) {
  if (animationId) cancelAnimationFrame(animationId);
  document.body.style.transition = 'none';
  const fromColors = [...currentColors];
  const duration = calculateDuration(fromColors, toColors);
  let start = null;

  function step(ts) {
    if (!start) start = ts;
    let p = (ts - start) / duration;
    p = Math.min(p, 1);
    const eased = easeInOutQuad(p);

    const colors = fromColors.map((c, i) => lerpHexColor(c, toColors[i], eased));
    applyBackground(colors);

    if (p < 1) {
      animationId = requestAnimationFrame(step);
    } else {
      currentColors = [...toColors];
      animationId = null;
    }
  }

  animationId = requestAnimationFrame(step);
}

// 监听元素
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    animate(entry.isIntersecting ? originColors : targetColors);
  });
}, { threshold: 0 });

// 观察目标元素（如 sum_img）
observer.observe(sum_img);
