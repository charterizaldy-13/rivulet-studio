(function(){
  function hideOverlay(){
    const overlay = document.querySelector('.page-reveal-overlay');
    if(!overlay) return;

    if(typeof gsap === 'undefined'){
      overlay.style.display = 'none';
      return;
    }

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: 'power1.out',
      onComplete(){ overlay.style.display = 'none'; }
    });
  }

  /* Wait for navbar/footer to be injected AND for nav-pill/animations to run their
     first (no-animation) layout pass, THEN fade the cover away — this is what
     actually hides the brief "bare page, no navbar yet" glimpse that happens
     between a fresh document load and the async partials fetch resolving. */
  document.addEventListener('rivulet:partials-ready', () => {
    requestAnimationFrame(() => requestAnimationFrame(hideOverlay));
  });
})();
