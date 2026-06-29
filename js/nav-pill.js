(function(){
  function initNavPill(){
    const nav = document.querySelector('.nav-links');
    if(!nav) return;
    const items = Array.from(nav.querySelectorAll('a'));
    if(!items.length) return;

    const pill = document.createElement('div');
    pill.className = 'nav-pill';
    nav.insertBefore(pill, nav.firstChild);

    function setActiveText(activeEl){
      items.forEach(item => item.classList.toggle('is-active-text', item === activeEl));
    }

    function getCurrentItem(){
      return items.find(item => item.classList.contains('active')) || null;
    }

    function movePillTo(el, animate){
      if(!el){
        if(animate){
          gsap.to(pill, { opacity:0, duration:0.25, ease:"power1.out" });
        } else {
          gsap.set(pill, { opacity:0 });
        }
        setActiveText(null);
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      const x = itemRect.left - navRect.left;
      const w = itemRect.width;

      if(animate){
        gsap.to(pill, { x, width:w, opacity:1, duration:0.5, ease:"back.out(1.4)" });
      } else {
        gsap.set(pill, { x, width:w, opacity:1 });
      }
      setActiveText(el);
    }

    items.forEach(item => {
      item.addEventListener('mouseenter', () => movePillTo(item, true));
    });

    nav.addEventListener('mouseleave', () => {
      movePillTo(getCurrentItem(), true);
    });

    window.addEventListener('resize', () => {
      movePillTo(getCurrentItem(), false);
    });

    requestAnimationFrame(() => movePillTo(getCurrentItem(), false));

    setupClickTransition(pill, items);
  }

  /* Click on a nav item: the pill (already sitting on that item from hover)
     scales up from its own center until it covers the whole viewport, THEN
     (and only then) we do a real window.location.href navigation — a genuine
     full reload, not an AJAX swap, so ScrollTrigger on the next page starts
     from a clean DOM with no Barba-style timing bugs. */
  function setupClickTransition(pill, items){
    items.forEach(link => {
      const href = link.getAttribute('href') || '';
      if(link.target === '_blank' || href.indexOf('#') === 0) return;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = link.href;

        const navRect = pill.parentElement.getBoundingClientRect();
        const itemRect = link.getBoundingClientRect();
        gsap.set(pill, { x: itemRect.left - navRect.left, width: itemRect.width, opacity:1, zIndex:99999 });

        animatePillExpand(pill).then(() => {
          window.location.href = targetUrl;
        });
      });
    });
  }

  function animatePillExpand(pill){
    return new Promise((resolve) => {
      const rect = pill.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(cx, window.innerWidth - cx);
      const dy = Math.max(cy, window.innerHeight - cy);

      const BUFFER = 2.3;
      const scale = Math.max(
        (dx * 2 * BUFFER) / rect.width,
        (dy * 2 * BUFFER) / rect.height
      );

      gsap.to(pill, {
        scale,
        duration: 0.6,
        ease: "expo.inOut",
        transformOrigin: "center center",
        onComplete: resolve
      });
    });
  }

  document.addEventListener('rivulet:partials-ready', initNavPill);
})();
