(function(){
  gsap.registerPlugin(ScrollTrigger);

  function splitHeadlineToWords(headline){
    const text = headline.innerHTML;
    const lines = text.split('<br>');
    headline.innerHTML = lines.map(line => {
      return line.trim().split(' ').map(word => {
        return `<span class="word"><span>${word}</span></span>`;
      }).join(' ');
    }).join('<br>');
  }

  function heroHeadlineReveal(){
    const headline = document.getElementById('heroHeadline');
    if(!headline) return;
    splitHeadlineToWords(headline);

    const words = headline.querySelectorAll('.word');
    gsap.set('#heroSub, #heroCta', { y: 16 });

    const tl = gsap.timeline({ defaults:{ ease:"power4.out" } });
    tl.fromTo(words,
        { opacity: 0, filter: 'blur(12px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power1.inOut',
          stagger: { each: 0.05, from: 'random' }
        }
      )
      .to('#heroSub', { opacity:1, y:0, duration:0.7 }, "-=0.3")
      .to('#heroCta', { opacity:1, y:0, duration:0.7 }, "-=0.5");
  }

  /* Splits a heading's text into one <span class="char"> per letter, each wrapped
     in an overflow:hidden ".char-wrap" so it can slide in from the right without
     showing letters that haven't arrived yet. Letters are grouped per word inside a
     ".char-word" (white-space:nowrap) so the browser only line-breaks between words,
     never mid-word. Returns the .char spans to animate. */
  function splitCharsSlideIn(el){
    const text = el.textContent;
    el.innerHTML = text.split(' ').map(word => {
      const chars = word.split('').map(ch =>
        `<span class="char-wrap"><span class="char">${ch}</span></span>`
      ).join('');
      return `<span class="char-word">${chars}</span>`;
    }).join(' ');
    return el.querySelectorAll('.char');
  }

  /* Section headlines (h1/h2) that reveal as they scroll into view — used on every
     page's section headers, stack-card titles, etc. NOT used for the index.html hero
     headline, which keeps its own word-blur-random treatment (heroHeadlineReveal). */
  function charSlideInOnScroll(selector){
    gsap.utils.toArray(selector).forEach(el => {
      const chars = splitCharsSlideIn(el);
      gsap.fromTo(chars,
        { xPercent: 105 },
        {
          xPercent: 0,
          duration: 1,
          ease: "expo",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 85%" }
        }
      );
    });
  }

  /* Same letter-slide-in effect, but plays immediately on load instead of on scroll —
     for headings that double as a page's own "hero" (already visible above the fold
     the moment the page appears), e.g. services.html/about.html/portfolio.html h1. */
  function charSlideInOnLoad(selector){
    gsap.utils.toArray(selector).forEach(el => {
      const chars = splitCharsSlideIn(el);
      gsap.fromTo(chars,
        { xPercent: 105 },
        { xPercent: 0, duration: 1, ease: "expo", stagger: 0.05 }
      );
    });
  }

  function scrollReveal(selector){
    gsap.utils.toArray(selector).forEach((el,i)=>{
      gsap.set(el, { opacity:0, y:28 });
      gsap.to(el, {
        opacity:1, y:0, duration:0.8, ease:"power2.out", delay:(i%2)*0.1,
        scrollTrigger:{ trigger: el, start:"top 88%" }
      });
    });
  }

  /* SOHub-style footer reveal: the action bar sits translated fully behind the CTA card
     (translateY:-100%, hidden) and slides down into place tied to scroll progress (scrub)
     as the CTA card scrolls through the viewport — not a sticky/pin effect. */
  function revealFooterActions(){
    const cta = document.querySelector('.reveal-cta');
    const actions = document.querySelector('.footer-actions');
    if(!cta || !actions) return;

    gsap.set(actions, { yPercent: -100 });
    gsap.to(actions, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: cta,
        start: "bottom 92%",
        end: "+=170",
        scrub: 0.4
      }
    });
  }

  window.RivuletAnimations = { heroHeadlineReveal, scrollReveal, revealFooterActions, charSlideInOnScroll, charSlideInOnLoad };
})();
