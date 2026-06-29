document.addEventListener('rivulet:partials-ready', () => {
  if(window.RivuletAnimations){
    window.RivuletAnimations.heroHeadlineReveal();
    window.RivuletAnimations.scrollReveal('.tile, .pf-card');
    window.RivuletAnimations.revealFooterActions();
    window.RivuletAnimations.charSlideInOnScroll('.section-head h2');
  }
});
