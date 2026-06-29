(function(){
  function inject(selector, url, done){
    const el = document.querySelector(selector);
    if(!el) return Promise.resolve();
    return fetch(url)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
        if(window.RivuletI18n) window.RivuletI18n.apply();
        if(done) done(el);
      })
      .catch(err => console.error('Failed to load partial:', url, err));
  }

  function markActiveLink(scope){
    const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    scope.querySelectorAll('.nav-links a, .nav-cta').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', !!(href && path.endsWith(href)));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
      inject('#site-navbar', 'partials/navbar.html', markActiveLink),
      inject('#site-footer', 'partials/footer.html')
    ]).then(() => {
      // i18n.apply() runs again inside each inject() above (it re-applies
      // data-i18n-html across the whole document, including the hero headline) —
      // page-specific scripts that mutate that same markup (e.g. splitting the
      // headline into words for GSAP) must wait for this event, otherwise their
      // DOM changes get silently overwritten the moment a partial finishes loading.
      document.dispatchEvent(new CustomEvent('rivulet:partials-ready'));
    });
  });

  window.RivuletComponents = { markActiveLink };
})();
