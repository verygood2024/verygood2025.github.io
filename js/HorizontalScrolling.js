const scrollbox = {
    container: document.querySelector(".scrollbox_container"),
    cards: [...document.querySelectorAll(".scrollbox_container_card")],
    //trucks: [...document.querySelectorAll(".scc_truck")],
    //citys: [...document.querySelectorAll(".scc_city")],
    trigger_distance: 0,
    border_distance: 0,
    distance: 0,
    resize() {
        let _scrollbox = document.querySelector(".scrollbox");
        _scrollbox.style.height = `${this.container.offsetWidth}px`;
        this.trigger_distance = _scrollbox.offsetTop;
        this.border_distance = _scrollbox.offsetTop + _scrollbox.offsetHeight - innerHeight;
    },
    move() {
        if (scrollY >= this.trigger_distance &&
            scrollY <= this.border_distance) {
            this.distance = scrollY - this.trigger_distance;
            this.container.style.transform = `translateY(${this.distance}px)`;
            let distance_x =
                this.distance / (this.border_distance - this.trigger_distance) *
                (this.container.offsetWidth - innerWidth);
            for (let i = 0; i < this.cards.length; i++) {
                this.cards[i].style.transform = `translateX(${-distance_x}px)`;
                //this.trucks[i].style.transform = `translateX(${distance_x * 1.2}px)`;
                //this.citys[i].style.transform = `translateX(${distance_x * 0.5}px)`;
            }
        }
    }
};
scrollbox.resize();
window.addEventListener("resize", () => {
    scrollbox.resize();
});
window.addEventListener("scroll", () => {
    scrollbox.move();
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scrollbox_container_card').forEach(card => {
    const altText = card.querySelector('p').textContent;
    card.querySelectorAll('img').forEach(img => {
      img.alt = altText;
    });
  });
});
