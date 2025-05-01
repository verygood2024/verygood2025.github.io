window.addEventListener('scroll', function() {
  const cloudsSection = document.getElementById('one_clouds');
  const clouds = cloudsSection.querySelectorAll('.cloud');
  const sectionTop = cloudsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    clouds.forEach(cloud => {
      cloud.style.opacity = 1;
      if (cloud.classList.contains('cloud-left')) {
        cloud.style.transform = 'translateY(-50%) translateX(200px)';
      } else if (cloud.classList.contains('cloud-right')) {
        cloud.style.transform = 'translateY(-50%) translateX(-200px)';
      }
    });
  }
});
