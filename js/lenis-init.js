(function(){
  if(typeof Lenis === 'undefined') return;

  var lenis = new Lenis({
    duration: 1.8,
    easing: function(t){ return 1 - Math.pow(1 - t, 4); },
    wheelMultiplier: 0.85,
    smoothWheel: true,
    syncTouch: false /* keep native momentum scroll on touch devices */
  });

  if(window.gsap && window.ScrollTrigger){
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function(time){ lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    /* Images (portfolio screenshots, etc.) can finish loading after DOMContentLoaded and
       change page height, leaving ScrollTrigger's cached start/end positions stale. Refresh
       once everything has actually finished loading. */
    window.addEventListener('load', function(){ ScrollTrigger.refresh(); });
  } else {
    requestAnimationFrame(function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    });
  }

  window.RivuletLenis = lenis;
})();
