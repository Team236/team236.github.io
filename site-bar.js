// Top bar: collapse into the compact bar once the page is scrolled,
// and keep the current page's link in view on narrow screens.
(function () {
  var bar = document.querySelector('.site-bar');
  if (!bar) return;
  var collapsed = false, ticking = false;
  function update() {
    ticking = false;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    // a little gap between the two thresholds stops it flickering at the edge
    var should = collapsed ? y > 8 : y > 24;
    if (should !== collapsed) { collapsed = should; bar.classList.toggle('is-collapsed', collapsed); }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();

  var nav = bar.querySelector('.site-bar-nav'), cur = bar.querySelector('.nav-current');
  if (nav && cur && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft += cur.getBoundingClientRect().left - nav.getBoundingClientRect().left - (nav.clientWidth - cur.offsetWidth) / 2;
  }
})();
